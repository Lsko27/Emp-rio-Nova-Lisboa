window.addEventListener("DOMContentLoaded", () => {

    const btnGerar = document.querySelector('#btn')
    const isLogged = localStorage.getItem("isLogged");

    // Se o usuário está logado
    if (isLogged === "true") {
        document.querySelector('#txt1').remove();
        document.querySelector('#txt2').remove();
    } else {
        document.querySelector('#btn').remove();
    }
})