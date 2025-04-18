window.addEventListener("DOMContentLoaded", () => {
  // Obtém o estado de login e o nome do usuário armazenado no localStorage
  const isLogged = localStorage.getItem("isLogged");
  const nome = localStorage.getItem("nomeUsuario");

  // Referência para os elementos do ícone de login e nome do usuário
  const icone = document.getElementById("loginIcon");
  const nomeSpan = document.getElementById("nomeUsuario");

  // Se o usuário está logado
  if (isLogged === "true" && icone && nomeSpan) {
    // Troca o ícone de login para o ícone de usuário
    icone.classList.remove('fa-right-to-bracket');
    icone.classList.add('fa-user');
    // Exibe o nome do usuário na navbar
    nomeSpan.textContent = nome;
  }
});

// Logout
// Verifica se o usuário está logado e cria a função de logout
document.addEventListener('DOMContentLoaded', () => {
  const logoutLink = document.getElementById('logoutLink');

  // Verifica se o link de logout existe
  if (logoutLink) {
      logoutLink.addEventListener('click', () => {
          // Remove os dados de login do localStorage ou sessionStorage
          localStorage.removeItem('isLogged');
          localStorage.removeItem('nomeUsuario');

          // Redireciona para a página inicial após o logout
          window.location.href = '../index.html';  // Ou para a página de login
          setTimeout(function () {
            window.location.href = '../index.html';
        }, 2000);
      });
  }
});