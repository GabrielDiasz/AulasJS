//Escrever um algoritmo que imprima a tabuada de um número informado pelo usuário.

const readlineSync = require('readline-sync')

var number = readlineSync.questionInt('Informe um numero para saber sua tabuada: ')

for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}` );
}