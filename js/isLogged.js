window.addEventListener("DOMContentLoaded", () => {
    const estouLogado = sessionStorage.getItem("isLogged");
    const nome = sessionStorage.getItem('nomeUsuario');
    const icone = document.getElementById("loginIcon");
    const nomeSpan = document.getElementById('nomeUsuario');

    if (estouLogado === "true") {
      // Troca ícone
      loginIcon.classList.remove('fa-right-to-bracket');
      loginIcon.classList.add('fa-user');

      // Mostra nome do usuário
      nomeSpan.textContent = nome;
    }
});
