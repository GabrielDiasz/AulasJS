/*Crie um algoritmo que o usuário entre com vários números inteiros e positivos e
imprima o produto dos números ímpares e a soma dos números pares. O programa
deve ser finalizado quando digitado o número 0*/
const readlineSync = require('readline-sync')
var prodOdd = 1
var sumEven = 0
do {
    var number = readlineSync.questionInt('Insira um numero: ')

    if (number % 2 == 0) {
        sumEven += number
    } else {
        prodOdd *= number
    }

} while (number > 0)

console.log(
    `Soma dos pares: ${sumEven}\n` +
    `Produto dos impares: ${prodOdd}`
)