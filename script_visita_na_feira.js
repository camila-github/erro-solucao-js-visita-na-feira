//SOLUCAO 1
const [pimentoesAmarelosA, pimentoesVermelhosB] = gets().split(" ");
console.log("X = " + (parseInt(pimentoesAmarelosA) + parseInt(pimentoesVermelhosB)));

// SOLUCAO 2
const entradaDados = gets();
const arrayResultado = entradaDados.split(" ") 
const pimentoesAmarelosA = parseInt(arrayResultado[0]);
const pimentoesVermelhosB = parseInt(arrayResultado[1]);
const totalPimentoes = pimentoesAmarelosA + pimentoesVermelhosB;
console.log("X = " + totalPimentoes);

//SOLUCAO 3
var valor = gets();
var resultado = valor.split(" ") 
var a = parseInt(resultado[0]);
var b = parseInt(resultado[1]);
var x = a + b;
console.log("X = " + x);