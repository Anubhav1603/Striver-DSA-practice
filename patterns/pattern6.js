function print_pattern(num) {
  let pattern = "";
  for (let row = num; row > 0; row--) {
    for (let column = 1; column <= row; column++) {
      pattern += column;
    }
    pattern += "\n";
  }
  return pattern;
}
console.log(print_pattern(5));
