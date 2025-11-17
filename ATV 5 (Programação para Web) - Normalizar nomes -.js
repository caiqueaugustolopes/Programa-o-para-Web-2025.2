function normalizarNomes(arr) {
  return arr.map(nome => nome.trim().toLowerCase());
}

console.log(normalizarNomes(["  Ana ", "JOÃO", "  maRiA"]));