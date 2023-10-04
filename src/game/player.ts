import { closeConnection } from '../db/db';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type PlayerPosition = {
  row: number;
  column: number;
};

export async function getPlayerPosition(playerPosition: PlayerPosition): Promise<Boolean> {
  console.log('Player position received ' + JSON.stringify(playerPosition));
  console.log('Getting map endlocation');
  const endLocation = await getMapLocations(1);
  console.log('Map endlocation' + JSON.stringify(endLocation));
  return checkMapComplete(playerPosition, endLocation);
}

function checkMapComplete(playerPosition: PlayerPosition, endLocation: PlayerPosition) {
  console.log('Checking map complete');
  return playerPosition.row === endLocation.row && playerPosition.column === endLocation.column;
}

async function getMapLocations(id: number) {
  let endLocation: PlayerPosition = { row: 5, column: 5 };
  try {
    let map = await prisma.map.findUnique({ where: { mapid: id } });
    await closeConnection();

    if (map != null && map.mapendlocationrow != null && map.mapendlocationcolumn != null) {
      endLocation.row = map.mapendlocationrow;
      endLocation.column = map.mapendlocationcolumn;
    }
    return endLocation;
  } catch (e) {
    console.log(e);
    console.log("Couldn't find map end location, using default 5.5");
    return endLocation;
  }
}
