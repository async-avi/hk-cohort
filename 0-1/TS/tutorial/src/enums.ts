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

enum StatusCodes {
  EverythingOK = 202,
  Unauthorized = 411,
  ServerNotFound = 505,
}

function serverError(statusCode: StatusCodes) {
  return statusCode;
}

console.log(serverError(StatusCodes.ServerNotFound));
