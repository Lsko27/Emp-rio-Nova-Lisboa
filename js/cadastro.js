let nome = document.querySelector('#first_name');
let sobrenome = document.querySelector('#last_name');
let end = document.querySelector('#address');
let num = document.querySelector('#number');
let tel = document.querySelector('#fone');
let email = document.querySelector('#email');
let senha = document.querySelector('#password');  

let icon = document.querySelector('#loginIcon');


let confirmaSenha = document.querySelector('#confirmPassword');   

const btnCadastro = document.getElementById('cadastrar')

btnCadastro.addEventListener('click', () => {
    if(nome.value == '') {
        alert('[ERRO] Nome Inválido!');
    } else if (sobrenome.value == ''){
        alert('[ERRO] Sobrenome Inválido!');
    } else if (end.value == '' || num.value == ''){
        alert('[ERRO] Endereço Inválido!');
    } else if (tel.value == '' || tel.value.length < 11) {
        alert('[ERRO] Telefone Inválido!')
    } else if (!(email.value).includes('@', '.com')){
        alert('[ERRO] Digite um email válido!')
    } else if (senha.value == '') {
        alert('[ERRO] Senha Inválida!')
    } else if (senha.value.length < 6) {
        alert('[ERRO] A senha deve conter no mínimo 6 caracteres!')
    } else if (senha.value !== confirmaSenha.value) {
        alert('[ERRO] As senhas não coincidem!')
    } else {
        alert(`CADASTRO EFETUADO COM SUCESSO!
        Seja Bem-Vindo, ${nome.value} ${sobrenome.value}.`)
        setTimeout(function() {
            window.location.href = '../index.html'
        }, 2000); 
    }
});
    

