let user = document.querySelector('#email');
let senha = document.querySelector('#password');
const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', () => {
    if ((user.value) == 0 || (senha.value) == 0) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else if (senha.value.length < 6) {
        alert('[ERRO] A senha deve conter ao mínimo 6 caracteres!');
    } else if (!user.value.includes('@', '.com')) {
        alert('[ERRO] Por favor, insira um email válido');
    } else {
        alert('LOGIN EFETUADO COM SUCESSO!');

        // Salva o estado de login no localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', user.value.split('@')[0]);

        // Altera o ícone de login para o ícone de usuário
        const loginIcon = document.getElementById('loginIcon');
        loginIcon.classList.remove('fa-right-to-bracket');
        loginIcon.classList.add('fa-user');

        setTimeout(function () {
            window.location.href = '../index.html'
        }, 2000);
    }
});