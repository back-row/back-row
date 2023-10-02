export type PlayerPosition = {
  row: number;
  column: number;
};

const completePosition: PlayerPosition = {
  row: 6,
  column: 6
};

export function getPlayerPosition(playerPosition: PlayerPosition): Boolean {
  console.log('Player position received ' + JSON.stringify(playerPosition));

  return checkMapComplete(playerPosition);
}

function checkMapComplete(playerPosition: PlayerPosition) {
  console.log('Checking map complete');
  return (
    playerPosition.row === completePosition.row && playerPosition.column === completePosition.column
  );
}
