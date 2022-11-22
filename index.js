let campoAltura = null;
let campoMassa = null;
let botaoQueCalcula = null;
let paragrafoExibeIMC = null;
let paragrafoExibeSituacao = null;
let divExibeResultado = null;


let dadosUsuario = {
    altura: null,
    massa: null
}


document.addEventListener("DOMContentLoaded", setup);

function setup() {
   
    campoAltura = document.getElementById("alturaUsuario");
    campoMassa = document.getElementById("massaUsuario");
    botaoQueCalcula = document.getElementById("botaoCalcular");
    paragrafoExibeIMC = document.getElementById("exibirIMC");
    paragrafoExibeSituacao = document.getElementById("exibeSituacao");
    divExibeResultado = document.getElementById("exibeCalculos");

    
    campoAltura.addEventListener("change", () => dadosUsuario.altura = Number(campoAltura.value));

    
    campoMassa.addEventListener("change", () => dadosUsuario.massa = Number(campoMassa.value));

    
    botaoQueCalcula.addEventListener("click", () => {
        if (dadosUsuario.altura != 0 && dadosUsuario.massa != 0) {
        const valorIMC = (dadosUsuario.massa / (dadosUsuario.altura ** 2)).toFixed(2);
        const situacaoUsuario = testaSituacao(valorIMC);

        paragrafoExibeIMC.innerText = `${valorIMC} kg.`;
        paragrafoExibeSituacao.innerText = `${situacaoUsuario}`;
        divExibeResultado.hidden = 0;
        }
    });
}

function testaSituacao(valorIMC) {
    
    let IMC = Number(valorIMC)

    
    switch (true) {
        case (IMC < 17):
            return "MUITO ABAIXO DO PESO.";

        case (IMC < 18.5):
            return "ABAIXO DO PESO."
        
        case (IMC < 25):
            return "NORMAL.";

        case (IMC < 30):
            return "ACIMA DO PESO.";

        case (IMC < 35):
            return "OBESO.";

        case (IMC < 40):
            return "OBESIDADE SEVERA.";

        case (IMC >= 40):
            return "OBESIDADE MORBIDA.";

        default:
            return "OCORREU UM ERRO.";
    }
}