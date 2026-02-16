function pattern_print(num) {
  let pattern = "";
  let counter = 1;
  let space = 1;
  for (let row = num * 2; row > 0; row--) {
    if (row > 5) {
      space = row - num;
      counter = (num * 2 - row) * 2;
    } else {
      space = num - row + 1;
      counter = num * 2 - (num - row) * 2 - 2;
    }
    for (let star = 0; star < space; star++) {
      pattern += "*";
    }

    for (let column = 0; column < counter; column++) {
      pattern += " ";
    }
    for (let star = 0; star < space; star++) {
      pattern += "*";
    }

    pattern += "\n";
  }
  return pattern;
}
console.log(pattern_print(5));
