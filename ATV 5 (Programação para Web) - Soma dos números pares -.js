function somaPares(arr) {
  return arr
    .filter(n => n % 2 === 0)
    .reduce((acc, n) => acc + n, 0);
}

console.log(somaPares([3, 8, 2, 5, 10]));
