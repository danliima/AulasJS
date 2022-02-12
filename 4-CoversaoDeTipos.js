console.log("Concersão de Tipos");

console.log("ano" + 2020); //O JS concatena textos e números
console.log("2" + "2"); //Nele não é possível fazer soma de duas strings, então ele junta os textos.
console.log(parseInt("2") + parseInt("2")); //  O paseInt converte string para números e parseFloat para números com casas decimais. 

console.log("10" / "2"); 
//O JS realiza uma divisão de números que estão como strings

console.log("Daniel" / 3);
//Porém se for um texto ele não nos dá a interpretação, pois é impossível
//O retorno no terminal será NaN (Not a number)

console.log("7" / "2");
console.log(6.5);
//Essas operações nos retornam um ponto flutuante, que são aqueles números com casas decimais,