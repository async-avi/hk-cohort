enum Color {
  Red,
  Blue,
  Green,
}

function colorLogger(input: Color): Color {
  return input;
}

console.log(colorLogger(Color.Blue));
