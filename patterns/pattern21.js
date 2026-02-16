function pattern_print(num) {
  let pattern = "";
  for (let row = 0; row < num; row++) {
    for (let column = 0; column < num; column++) {
      if (row == 0 || row == num - 1 || column == 0 || column == num - 1)
        pattern += "*";
      else {
        pattern += " ";
      }
    }
    pattern += "\n";
  }
  return pattern;
}
console.log(pattern_print(5));
