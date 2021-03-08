## Exercicio: Vista na Feira - Calcular Pimentões

O exercicio publicado é referente ao treinamento de Java Script da (https://digitalinnovation.one)


#### Descrição do Desafio:

Você está na feira com a sua sacola e parou em uma banca. O feirante lhe entregou pimentões amarelos e vermelhos. Agora iremos somar os pimetões amarelos e vermelhos para descobrir o total de pimentões na sacola.  Você receberá 2 inteiros que devem ser lidos e armazenados nas variáveis A (pimentões amarelos) e B (pimentões vermelhos). Faça a soma de A e B atribuindo o seu resultado na variável X (total de pimentões). Apresente X como descrito na mensagem de exemplo abaixo. Não apresente outra mensagem além da mensagem especificada.


#### Entrada: 

A entrada contém 2 valores inteiros, separados por um espaço.


#### Saída: 

Imprimir a mensagem "X = " (sendo a letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. Assegure que exista um espaço antes e depois do sinal de igualdade.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
11 7 | X = 18
-11 6 | X = -5
11 -2 | X = 9

 
#### Update:

08-03-2021 - Utilizando variaveis constantes (const). Ajustado nomenclatura das constantes (Uso de conceitos CleanCode). Utilizado atribuição via desestruturação (destructuring assignment).


#### Javascript　

```javascript
///SOLUCAO 1
/*Recebe a entrada em string e armazena em um array de atribuição via 
desestruturação (destructuring assignment) - pimentoesAmarelosA e 'pimentoesVermelhosB'*/
const [pimentoesAmarelosA, pimentoesVermelhosB] = gets().split(" ");
/*Utilizado parseInt() para mudar string em inteiro. Calcula e imprime o resultado*/
console.log("X = " + (parseInt(pimentoesAmarelosA) + parseInt(pimentoesVermelhosB)));

// SOLUCAO 2
/* Utilizando variaveis constantes (const) 
e ajustado nomenclatura das constantes (Uso de conceitos CleanCode) */ 
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
```

