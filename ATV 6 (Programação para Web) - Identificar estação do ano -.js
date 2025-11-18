function estacaoDoAno(mes) {
  if (mes === 12 || mes === 1 || mes === 2) {
    return "Verão";
  } else if (mes === 3 || mes === 4 || mes === 5) {
    return "Outono";
  } else if (mes === 6 || mes === 7 || mes === 8) {
    return "Inverno";
  } else if (mes === 9 || mes === 10 || mes === 11) {
    return "Primavera";
  } else {
    return "Mês inválido";
  }
}
