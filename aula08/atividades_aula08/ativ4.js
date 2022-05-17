//4. Crie um programa que armazene 10 números digitados pelo usuário em dois vetores: um somente para números pares, e outro somente para números ímpares. Após, exiba os valores dos dois vetores na tela, em sequência. Obs.: As posições que não receberem valores exibirão o número zero. Não se preocupe com isso.
const readlineSync = require('readline-sync')

var number = 0
var odd = []
var even = []

for (let i = 0; i < 10; i++) {
   number = readlineSync.questionInt(`Informe o numero ${i + 1}: `)

   if (number % 2 == 0) {
      even[i] = number
   } else {
      odd[i] = number
   }
}

for (let i = 0; i < 10; i++) {
    if (even[i] == null) {
       even[i] = 0
    }
    if (odd[i] == null) {
       odd[i] = 0
    }
}

console.log(`Pares: [ ${even} ]\tImpares: [ ${odd} ]`)