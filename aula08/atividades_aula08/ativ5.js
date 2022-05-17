//5. Modifique o programa anterior para não aceitar a entrada do número zero, e requisitar a digitação de outro número neste caso.
const readlineSync = require('readline-sync')

var number = 0
var odd = []
var even = []

for (let i = 0; i < 10; i++) {
   number = readlineSync.questionInt(`Informe o numero ${i + 1}: `)

   while (number === 0) {
      console.log(`Numero invalido!`)
      number = readlineSync.questionInt(`Informe o numero ${i + 1}: `)
   }

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