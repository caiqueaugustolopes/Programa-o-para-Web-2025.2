function ordenarPorIdadeENome(arr) {
  return [...arr].sort(
    (a, b) => a.idade - b.idade || a.nome.localeCompare(b.nome)
  );
}

const lista = [
  {nome: "Carlos", idade: 30},
  {nome: "Ana", idade: 20},
  {nome: "Bruno", idade: 20},
];

console.log(ordenarPorIdadeENome(lista));
