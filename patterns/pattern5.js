function print_pattern(num) {
  let pattern = "";
  for (let row = num; row > 0; row--) {
    for (let column = 0; column < row; column++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}
console.log(print_pattern(5));
