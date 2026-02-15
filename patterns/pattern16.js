function print_pattern(num) {
  let pattern = "";
  let alpha = 65;
  for (let row = 1; row <= num; row++) {
    for (let column = 1; column <= row; column++) {
      pattern += String.fromCharCode(alpha);
    }
    pattern += "\n";
    alpha += 1;
  }
  return pattern;
}

console.log(print_pattern(5));
