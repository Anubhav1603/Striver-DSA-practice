function armstrong(num) {
  let copy = num;
  let sum = 0;
  while (copy > 0) {
    let rem = Math.floor(copy % 10);
    sum = sum + rem ** 3;
    copy = Math.floor(copy / 10);
  }
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}
console.log(armstrong(123));
