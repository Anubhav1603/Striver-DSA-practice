function print_pattern(num) {
  let pattern = "";
  let stars;
  for (let row = 0; row < num * 2; row++) {
    if (row > 5) {
      stars = 2 * num - row - 1;
    } else {
      stars = row - 1;
    }
    for (let column = 0; column <= stars; column++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}
console.log(print_pattern(5));
