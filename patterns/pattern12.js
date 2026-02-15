function pattern_print(num) {
  let pattern = "";
  let space_counter = 0;

  for (let row = 1; row < num; row++) {
    for (let outer = 1; outer <= row; outer++) {
      pattern += outer;
    }
    for (let space = num; space >= space_counter; space--) {
      pattern += " ";
    }
    for (let outer = row; outer >= 1; outer--) {
      pattern += outer;
    }
    pattern += "\n";
    space_counter += 2;
  }
  return pattern;
}
console.log(pattern_print(5));
