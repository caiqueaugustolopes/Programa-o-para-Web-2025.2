function encontrarPorId(arr, alvo) {
  const obj = arr.find(item => item.id === alvo);
  return obj || null;
}

const pessoas = [
  {id: 1, nome: "Ana"},
  {id: 2, nome: "Bruno"}
];

console.log(encontrarPorId(pessoas, 2));
console.log(encontrarPorId(pessoas, 5));
