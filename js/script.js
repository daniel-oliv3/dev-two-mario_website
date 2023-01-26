/* ======= Btn modal ======= */

//Passo 1 - pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector('.botao-trailer');
//console.log(botaoTrailer);

//Passo 3 - pegar o elemento da modal usando o js
const modal = document.querySelector('.modal');
//console.log("Mostrar o objeto da modal: ", modal);

//Passo 2 - idendificar quando o usuario clicar no botão
botaoTrailer.addEventListener("click", () => {
    //console.log("aqui");
    /*Passo 4 - abrir a modal na tela*/
    //console.log(modal.classList);
    modal.classList.add("aberto"); 
});


/* ======= Fechar btn modal ======= */

//Passo 1 - pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector('.fechar-modal');

//Passo 2 - idendificar quando o usuario clicar no X
botaoFecharModal.addEventListener("click", () => {
    //Passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});


/* Parar o video da modal quando apertar o botão X*/
const linkDoVideo =  "https://www.youtube.com/embed/Cb4WV4aXBpk";
const video = document.getElementById("video");




/* ================================================== */

//console.log('Mostrar o document: ', document);

/*
OBJETIVO 1 - quando o usuario clicar no botão veja o trailer  devemos abrir a modal com o video do trailer
    - Passo 1 - pegar o elemento que representa o botão na tela usando o js
    - Passo 2 - idendificar quando o usuario clicar no botão
    - Passo 3 - pegar o elemento da modal usando o js
    - Passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o úsuario clicar no X devemos fechar a modal
    - Passo 1 - pegar o elemento de fechar modal usando o js
    - Passo 2 - idendificar quando o usuario clicar no X
    - Passo 3 - fechar a modal
*/

















