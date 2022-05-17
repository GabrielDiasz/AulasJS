/*Crie um algoritmo que o usuário entre com vários números inteiros e positivos e
imprima o produto dos números ímpares e a soma dos números pares. O programa
deve ser finalizado quando digitado o número 0*/
const readlineSync = require('readline-sync')

var odd = 1
var even = 0

var number = readlineSync.questionInt("Informe um numero: ")

while (number > 0) {
    if (number % 2 == 0) {
        even += number
    } else {
        odd *= number
    }
    number = readlineSync.questionInt(
       'Informe um numero ou digite 0 para finalizar: '
    )
}

console.log(`Soma dos pares: ${even}\nProduto dos impares: ${odd}`)