console.log("Exercitando condicionais");

console.log("Exercício 1: Lista de Turmas");

const listaDeTurmas = new Array(
    `Administração`,
    `Direito`,
    `Jornalismo`

);

const media = 8;
console.log("Suas opções de acordo com a sua média");
console.log(listaDeTurmas);

if (media <= 10) {
    console.log("Seu curso será:");
    console.log(listaDeTurmas[0]);

} else if (media > 10) {
    console.log("Como sua média é acima de 10, você pode escolher entre os outros cursos disponíveis, incluindo ADM.");
    console.log(listaDeTurmas);

}




