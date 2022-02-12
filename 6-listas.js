console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Destinos possíveis`);
// console.log(salvador, saoPaulo, rioDeJaneiro);

//contrl + k + c ele comenta
//contrl + k + u ele tira o comentário

// Para trabalhar com listas, usamos o Array.
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// O push adiciona um item na lista
listaDeDestinos.push(`Curitiba`);

// O splice remove um item da posição. Em uma lista, as posições são contadadas desde o 0.
listaDeDestinos.splice(1,1);

console.log("Destinos possíveis");
console.log(listaDeDestinos);

//Exibindo uma lista de itens específicos
console.log(listaDeDestinos[0], listaDeDestinos[2]);

listaDeDestinos.splice(1,1);




