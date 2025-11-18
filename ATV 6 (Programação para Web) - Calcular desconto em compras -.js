function calcularDesconto(valor) {
  if (valor < 100) {
    return "Sem desconto. Total: R$ " + valor.toFixed(2);
  } else if (valor <= 500) {
    return "10% de desconto. Total: R$ " + (valor * 0.9).toFixed(2);
  } else {
    return "20% de desconto. Total: R$ " + (valor * 0.8).toFixed(2);
  }
}
