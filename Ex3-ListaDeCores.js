console.log("Exercício: Lista de cores de um resistor.");

const listaDeCores = new Array(
    `preto`,
    `marrom`,
    `vermelho`,
    `laranja`,
    `amarelo`,
    `verde`,
    `azul`,
    `violeta`,
    `cinza`,
    `branco`

);

const corEscolhida = "branco";

//LINHAS DE CÓDIGO PARA TESTAR (Teste completo, o código está funcionando!)

let potencia = 0;
let corExiste = false;
while(potencia<10){
    if(listaDeCores[potencia] == corEscolhida){
        corExiste = true;
        break
    }
    potencia += 1;
}

if(corExiste == true){
    console.log(listaDeCores);
    console.log("A cor que você escolheu é:",corEscolhida,"\nPortanto, a sua potência é:", potencia);
    console.log("Tenha um bom trabalho!");
}else{ 
    console.log("Escolher uma cor válida, pois essa não contem na lista")
}

///ESSAS LINHAS DE CÓDIGOS ESTÃO CERTAS, MAS TÁ INCOMPLETO:

// let potencia = 0;
// let corExiste = false;
// while(potencia<10){
//     if(listaDeCores[potencia] == corEscolhida){
//         corExiste = true;
//         break
//     }

//     potencia += 1;
// }

// console.log(listaDeCores)
// console.log("A cor que você escolheu é:",corEscolhida,"\nPortanto, a sua potência é:", potencia);

// console.log("Tenha um bom trabalho!")

