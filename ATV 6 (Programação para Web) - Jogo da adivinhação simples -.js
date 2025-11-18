function adivinharNumero(tentativa) {
  const secreto = 7;

  if (tentativa < secreto) {
    return "Muito baixo!";
  } else if (tentativa > secreto) {
    return "Muito alto!";
  } else {
    return "Parabéns, você acertou!";
  }
}
