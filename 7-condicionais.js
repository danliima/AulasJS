console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;


console.log("Destinos possíveis");
console.log(listaDeDestinos);

//Nessa parte comentada, temos uma forma que também server para encadear condições:

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de Idade.");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada == true) { //Caso o comprador esteja acompanhado
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não vender, pois o comprador é menor de idade");
// }
// O ALt + sift + F identa o nosso código condicional

//A outra forma é unindo declarações booleanas dentro do if
//Para isso usaremos o parêmetro || (Ele significa ou)

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viajem!!");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Não vender, pois o comprador é menor de idade");
}

console.log("Embarcando: \n \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!!")
}else {
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);


//listaDeDestinos.splice(1,1);
