console.log("Exercício 2: Posso votar?");

const idade = 71;

if (idade < 18) {
    console.log("Você não pode votar, pois tem idade menor que 18")
} else if (idade >= 18 && idade <= 70) {
    console.log("Como sua idade está entre 18 e 70 anos.");
    console.log("Você é obrigado a votar!");
} else {
    console.log("Você não é obrigado a votar, pois tem idade acima de 70 anos")

}

