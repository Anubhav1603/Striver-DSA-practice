function print_pattern(num) {
  let pattern = "";
  for (let row = 1; row <= num; row++) {
    let alpha = 65;
    for (let column = 1; column <= row; column++) {
      pattern += String.fromCharCode(alpha);
      alpha += 1;
    }
    pattern += "\n";
  }
  return pattern;
}
console.log(print_pattern(5));
