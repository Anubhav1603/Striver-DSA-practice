function pattern_print(num) {
  let pattern = "";
  let space_counter = 2 * (num - 1);
  let p_star = 0;

  for (let row = 1; row < num * 2; row++) {
    if (row >= num) {
      p_star = num * 2 - row;
    } else {
      p_star = row;
    }
    for (let outer = 1; outer <= p_star; outer++) {
      pattern += "*";
    }
    for (let space = 0; space < space_counter; space++) {
      pattern += " ";
    }
    for (let outer = 1; outer <= p_star; outer++) {
      pattern += "*";
    }
    pattern += "\n";
    if (row < num) {
      space_counter -= 2;
    } else {
      space_counter += 2;
    }
  }
  return pattern;
}
console.log(pattern_print(8));
