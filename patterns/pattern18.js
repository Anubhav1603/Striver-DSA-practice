function print_pattern(num) {
  let pattern = "";
  let alpha = 69;
  for (let row = 0; row < num; row++) {
    let temp = alpha;
    for (let column = 0; column <= row; column++) {
      pattern += String.fromCharCode(temp);

      temp += 1;
    }
    alpha -= 1;
    pattern += "\n";
  }
  return pattern;
}
console.log(print_pattern(5));
