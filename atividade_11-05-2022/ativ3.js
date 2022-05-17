//3. Digite 10 valores numéricos e armazene em um vetor. Em seguida, solicite ao usuário um número para multiplicar todos os elementos do vetor. O programa deverá exibir o resultado da multiplicação do número dado pelo usuário em todos os elementos armazenados.
const readlineSync = require('readline-sync')

var numbers = []
var multiple = 0

for (let i = 0; i < 10; i++) {
    numbers.push(readlineSync.questionInt(`Informe o numero ${i+1}: `))
}

multiple = readlineSync.questionInt('Insira um numero para multiplicar: ')

for (i in numbers) {
    console.log(`${numbers[i]} x ${multiple} = ${numbers[i] * multiple}`)
}