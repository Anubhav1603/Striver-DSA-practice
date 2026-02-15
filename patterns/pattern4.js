function print_pattern(num) {
  let pattern = "";
  for (let row = 0; row < num; row++) {
    for (let column = 0; column <= row; column++) {
      pattern += row + 1;
    }
    pattern += "\n";
  }
  return pattern;
}
console.log(print_pattern(5));
