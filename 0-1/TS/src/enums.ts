enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

function movePlayer(direction: Direction): Direction {
  return direction;
}

console.log(movePlayer(Direction.Up));
