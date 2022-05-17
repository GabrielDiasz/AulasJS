const readline = require('readline-sync')
var numero1 = readline.questionInt('Primeiro Numero: ')
var numero2 = readline.questionInt('Segundo Numero: ')

if (numero1 > numero2) {
   console.log(`O numero ${numero1} é maior que o numero ${numero2}`)
} else if (numero1 == 0 && numero2 == 0) {
   console.log('Os dois valores sao 0')
} else {
   console.log(`O numero ${numero2} é maior que o numero ${numero1}`)
}
