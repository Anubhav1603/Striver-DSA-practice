function outer(n) {
  if (n === 0) return;
  outer(n - 1);
  console.log(n);
}

outer(5);
