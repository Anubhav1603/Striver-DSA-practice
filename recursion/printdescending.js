function outer(n) {
  if (n === 0) return;
  console.log(n);
  outer(n - 1);
}

outer(5);
