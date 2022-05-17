/*5. Escreva um programa para ler 3 valores inteiros (considere que não
serão lidos valores iguais) e escrevê-los em ordem crescente. */
const readlineSync = require('readline-sync')

var num = []

for (var i = 0; i < 3; i++) {
   num.push(readlineSync.questionInt(`Informe o numero ${i + 1}: `))

   while (num[i] == num[i - 1]) {
      num.pop()
      num.push(
         readlineSync.questionInt(
            `Informe o numero ${i + 1} diferente do anterior: `
         )
      )
   }
}

console.log(num.sort())