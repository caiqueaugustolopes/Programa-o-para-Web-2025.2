function agruparPorCategoria(produtos) {
  return produtos.reduce((acc, p) => {
    (acc[p.categoria] ??= []).push(p);
    return acc;
  }, {});
}

const produtos = [
  {nome: "Maçã", categoria: "Fruta"},
  {nome: "Banana", categoria: "Fruta"},
  {nome: "Cenoura", categoria: "Legume"},
];

console.log(agruparPorCategoria(produtos));