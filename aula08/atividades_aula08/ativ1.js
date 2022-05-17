//1. Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o somatório desses números na tela. Após exibir a soma, o programa deve mostrar também os números que o usuário digitou, um por linha.
const readlineSync = require('readline-sync')

var numbers = []
var sum = 0

for (let i = 0; i <= 4; i++) {
    numbers.push(readlineSync.questionInt(`Insira o numero ${i + 1}: `))
    sum += numbers[i]
}

console.log(`Soma dos numeros informados: ${sum}`);
console.log(`Os numeros digitados foram:`);

for (i in numbers) {
    console.log(numbers[i])
}