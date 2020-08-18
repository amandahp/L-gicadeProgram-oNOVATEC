function trocarReact() {
    // cria referência aos elementos da página
    var imgReact = document.getElementById("imgReact")
    var divTitulo = document.getElementById("divTitulo");

    var react; // define variável que irá receber o react

    // verifica qual radiobutton está selecionado
    if (rbAnimado.checked) {
        react = "Animado";
    } else if (rbDesanimado.checked) {
        react = "Desanimado";
    } else {
        react = "Neutro";
    }

    // define as classes de divTitulo: row e cores do react
    divTitulo.className = "row cores" + react;

    // modifica a imagem de acordo com a seleção do cliente
    imgReact.src = "img/" + react.toLowerCase() + ".png";
    imgReact.className = "exibe"; // exibe a imagem 
    imgReact.alt = "Símbolo do " + react; // modifica atributo alt

    // salva no navegador a escolha do cliente
    localStorage.setItem("react", react);

}

// captura os elementos do radiobutton
var rbAnimado = document.getElementById("rbAnimado");
var rbDesanimado = document.getElementById("rbDesanimado");
var rbNeutro = document.getElementById("rbNeutro");

// associa ao evento change a function trocarRaect
rbAnimado.addEventListener("change", trocarReact);
rbDesanimado.addEventListener("change", trocarReact);
rbNeutro.addEventListener("change", trocarReact);

// fucntion que verifica se o cliente selecionou um react em sua visita anterior ao site

function verificarReact() {
    //se já estiver salvo algum react algum react

    if (localStorage.getItem("react")) {

        const newLocal = "react";
        var react = localStorage.getItem(newLocal); //obtém o react

        // conforme o react, marca um dos elementos do input type radio
        if (react == "Animado") {
            rbAnimado.checked = true;
        } else if (react == "Desanimado") {
            rbDesanimado.checked = true;
        } else {
            rbNeutro.checked = true;

        }

        trocarReact(); // chama a function que troca a imagem e as cores

    }
}

// chama function que verifica se cliente já selecionou react anteriormente

verificarReact();