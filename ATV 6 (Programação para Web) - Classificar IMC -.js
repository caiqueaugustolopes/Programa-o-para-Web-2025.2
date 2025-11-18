function classificarIMC(peso, altura) {
  const imc = peso / (altura * altura);

  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}
