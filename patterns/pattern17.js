function print_pattern(num) {
  let pattern = "";
  let counter = 1;

  for (let row = num; row > 0; row--) {
    let alpha = 65;
    for (let space = 0; space < row - 1; space++) {
      pattern += " ";
    }
    for (let star = 0; star < counter; star++) {
      pattern += String.fromCharCode(alpha);

      if (Math.floor(counter / 2) === star) {
        alpha -= 1;
      } else {
        alpha += 1;
      }
    }
    counter += 2;
    pattern += "\n";
  }
  return pattern;
}
console.log(print_pattern(5));
