function pattern_print(num) {
  let pattern = "";
  let stars = 2 * num - 1;
  for (let row = 0; row < num; row++) {
    for (let space = 0; space < row; space++) {
      pattern += " ";
    }

    for (let column = 0; column < stars; column++) {
      pattern += "*";
    }
    stars -= 2;
    pattern += "\n";
  }
  return pattern;
}
console.log(pattern_print(5));
