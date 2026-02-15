function print_pattern(num) {
  let pattern = "";
  let flag = 1;
  for (let row = 0; row < num; row++) {
    for (let column = 0; column <= row; column++) {
      pattern += !flag ? 0 : 1;
      flag = flag ? 0 : 1;
    }
    pattern += "\n";
  }
  return pattern;
}
console.log(print_pattern(5));
