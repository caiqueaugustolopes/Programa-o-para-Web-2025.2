const letras = ['a', 'b', 'a', 'c', 'a'];
let count = 0;

for (let i = 0; i < letras.length; i++) {
  if (letras[i] === 'a') {
    count++;
  }
}

console.log("Quantidade de 'a':", count);
