let carro = {
     marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
console.log(carro);

console.log(carro.marca);
console.log(carro["modelo"]);

carro.cor = "Prata";
console.log(carro);

carro.ano = 2025;
console.log(carro);

delete carro.cor;
console.log(carro);

carro.ligar = function() {
    console.log("O carro está ligado");
};
carro.ligar();

let pessoa = {
    nome:"Maria",
    endereco: {
         rua: "Rua das Flores",
        cidade: "Recife"
    }
};
    console.log(pessoa.endereco.cidade);

for (let prop in carro) {
    console.log(prop + ": " + carro[prop]);
}

console.log(Object.keys(carro));
console.log(Object.values(carro));

class Animal {
constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
    }
}

let cachorro = new Animal("Rex", "Cachorro");
let gato = new Animal("Mimi", "Gato");

console.log(cachorro);
console.log(gato);