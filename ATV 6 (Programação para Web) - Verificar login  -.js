function verificarLogin(usuario, senha) {
  if (usuario === "admin" && senha === "1234") {
    return "Login bem-sucedido";
  } else {
    return "Usuário ou senha inválidos";
  }
}
