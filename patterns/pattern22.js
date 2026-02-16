function pattern_print(num) {
  let pattern = "";
  let size = 2 * num - 1;

  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      let top = row;
      let left = column;
      let bottom = size - 1 - row;
      let right = size - 1 - column;

      let layer = top;

      if (left < layer) {
        layer = left;
      }

      if (right < layer) {
        layer = right;
      }
      if (bottom < layer) {
        layer = bottom;
      }
      pattern += num - layer + " ";
    }
    pattern += "\n";
  }

  return pattern;
}

console.log(pattern_print(4));
