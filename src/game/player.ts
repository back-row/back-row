export type PlayerPosition = {
  x: number;
  y: number;
};

export function getPlayerPosition(playerPosition: PlayerPosition) {
  console.log('Player position received ' + JSON.stringify(playerPosition));
}
