function outer(name, n) {
  console.log(name, n);
  if (n <= 1) return [name, 0];
  return outer(name, n - 1);
}

const [a, b] = outer("Anubhav", 5);
console.log(a, b);
