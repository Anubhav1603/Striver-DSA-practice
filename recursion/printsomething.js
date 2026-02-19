function outer(n) {
  console.log(n);
  if (n <= 1) return 0;
  function inner(n) {
    return outer(n - 1);
  }
  return inner(n);
}

const a = outer(5);
console.log(a);
