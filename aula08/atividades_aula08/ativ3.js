//3. Crie um programa que solicite a entrada de 10 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 5. Exiba os valores dos dois vetores na tela, simultaneamente, em duas colunas (um em cada coluna), uma posição por linha.
const readlineSync = require('readline-sync')

var numbers = []
var multipliedByFive = []

for (let i = 0; i < 10; i++) {
    numbers.push(readlineSync.questionInt(`Informe o numero ${i + 1}: `))
    multipliedByFive[i] = numbers[i] * 5
}

for (i in multipliedByFive) {
    console.log(`${numbers[i]} x 5 = ${multipliedByFive[i]}`)
}