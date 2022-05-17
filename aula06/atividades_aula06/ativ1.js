/*Faça um programa que leia número reais maiores que zero. Quando for entrado o
número zero, o programa deverá apresentar quantos números foram entrados e a
média destes.*/

const readlineSync = require('readline-sync')

var amount = -1
var average = 0
var sum = 0

for (let i = 1; number != 0; i++) {
   var number = readlineSync.questionFloat(`Informe o numero ${i}: `)
   while (number < 0) {
      var number = readlineSync.questionFloat(`Informe o numero ${i}: `)
   }
   amount++
   sum += number
}

average = sum / amount

console.log(
   `Quantidade de números informados: ${amount}\n` +
   `Media dos numeros informados: ${average.toFixed(2)}`
)
