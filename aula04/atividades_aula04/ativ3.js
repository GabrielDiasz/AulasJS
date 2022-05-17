/*Construa um algoritmo que leia uma quantidade indeterminada de números inteiros
positivos e identifique qual foi o maior número digitado. O final da série de números
digitada deve ser indicado pela entrada de -1.*/
const readlineSync = require('readline-sync')

var number = readlineSync.questionInt('Informe um numero: ')
var bigger = 0

while (number != -1) {
    if (number > bigger) {
        bigger = number
    }
    number = readlineSync.questionInt('Informe um numero: ')
}

console.log(`Maior numero informado: ${bigger}`)