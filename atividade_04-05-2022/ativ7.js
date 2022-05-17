//17 - Faça um algoritmo que leia vários números e informe quantos desses números entre 100 e 200 foram digitados. Quando o valor 0 (zero) for lido o algoritmo deverá cessar sua execução.
const readlineSync = require('readline-sync')

var sum = 0

for (let i = 0; number != 0; i++) {
    var number = readlineSync.questionInt('Informe um numero ou digite 0 para sair: ')
    if (number >= 100 && number <= 200) {
        sum ++
    }
}

console.log(`Foram digitados ${sum} numeros entre 100 e 200!`);