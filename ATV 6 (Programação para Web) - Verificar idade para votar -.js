function verificarVoto(idade) {
  if (idade < 16) {
    return "Não pode votar.";
  } else if ((idade >= 16 && idade < 18) || idade > 70) {
    return "Voto facultativo.";
  } else {
    return "Voto obrigatório.";
  }
}
