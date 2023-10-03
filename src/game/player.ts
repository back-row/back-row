import { closeConnection } from '../db/db';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type PlayerPosition = {
  row: number;
  column: number;
};

const endLocation = await getMapLocations(1);

export function getPlayerPosition(playerPosition: PlayerPosition): Boolean {
  console.log('Player position received ' + JSON.stringify(playerPosition));

  return checkMapComplete(playerPosition);
}

function checkMapComplete(playerPosition: PlayerPosition) {
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
    console.log("Couldn't find map end location, using default");
    return endLocation;
  }
}
