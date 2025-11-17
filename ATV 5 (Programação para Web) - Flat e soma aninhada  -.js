function somaAninhada(arr) {
  return arr.flat(Infinity).reduce((acc, n) => acc + n, 0);
}

console.log(somaAninhada([[1,2],[3,[4]],5]));
