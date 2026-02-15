function print_pattern(num) {
  let pattern = "";
  let counter = 0;
  for (let row = num; row > 0; row--) {
    for (let column = 0; column < row; column++) {
      pattern += " ";
    }
    for (let star = 0; star <= counter; star++) {
      pattern += "*";
    }
    counter += 2;
    pattern += "\n";
  }
  return pattern;
}

console.log(print_pattern(5));
