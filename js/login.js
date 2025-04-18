let user = document.querySelector('#username');
let senha = document.querySelector('#password');
const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', () => {
    if ((user.value) == '' || (senha.value) == '') {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else if (senha.value.length < 6) {
        alert('[ERRO] A senha deve conter ao mínimo 6 caracteres!');
    } else if (senha.value.length > 16) {
        alert('[ERRO] A senha deve conter ao máximo 16 caracteres!');
    } else if ((user.value) == '') {
        alert('[ERRO] Por favor, insira seu nome de usuário');
    } else {
        alert('LOGIN EFETUADO COM SUCESSO!');
        // Salva o estado de login no localStorage
        sessionStorage.setItem('isLogged', 'true');

        // Altera o ícone de login para o ícone de usuário
        const loginIcon = document.getElementById('loginIcon');
            loginIcon.classList.remove('fa-right-to-bracket');
            loginIcon.classList.add('fa-user');

        setTimeout(function () {
            window.location.href = '../index.html'
        }, 2000);
    }
});