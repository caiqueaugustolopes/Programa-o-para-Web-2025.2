let temCadastro = true;
let senhaCorreta = false;

let acesso = temCadastro && senhaCorreta;
let visitante = temCadastro || senhaCorreta;

console.log("Acesso liberado?", acesso);
console.log("Modo visitante ativo?", visitante);