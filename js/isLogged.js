window.addEventListener("DOMContentLoaded", () => {
    const estouLogado = sessionStorage.getItem("isLogged");
    const icone = document.getElementById("loginIcon");
  
    if (estouLogado === "true") {
        
      // Troca o ícone se estiver logado
      icone.classList.remove('fa-right-to-bracket');
      icone.classList.add('fa-user');
    }
  });
