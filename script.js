
// Carne - 400 gr por pessoa + de 6 horas - 650
// Creveja - 1200ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/Agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calc() {
    console.log("Calculando");
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdtotalcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas); 
    let qtdtotalcerv = cervejaPP(duracao) * adultos;
    let qtdtotalrefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);
    let qtdtotalagua = aguaPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);
    let qtdtotalcarv = carvPP(qtdtotalcarne) * qtdtotalcarne / 1000;

    

    resultado.innerHTML = `<p>${qtdtotalcarne/1000} Kg de Carne</p>` 
    resultado.innerHTML += `<p>${Math.ceil(qtdtotalcerv/355)} Latas de Cerveja (355ml)</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdtotalrefri/2000)} Pet's 2L Refrigerante</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdtotalagua/2000)} Pet's 2L Água </p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdtotalcarv/1000)} Kg Carvão</p>`


}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 700;
    } else {
        return 400  ;
    }
}


function cervejaPP() {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1000;
    }
}

function refriPP(duracao) {
    if (duracao >= 6) {
        return 800;
    } else {
        return 400;
    }
}

function aguaPP(duracao) {
    if (duracao >= 6) {
        return 1000;
    } else {
        return 500;
    }
}

function carvPP(qtdtotalcarne) {
    if (qtdtotalcarne > 0) {
        return 1500;
    } else {
        return 0;
    }
    
}