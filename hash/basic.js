let arr = [2, 6, 7, 8, 9, 4, 6, 8, 9];
let map = new Map();
arr.forEach((num) => {
  if (map.has(num)) {
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
});
console.log(map);
