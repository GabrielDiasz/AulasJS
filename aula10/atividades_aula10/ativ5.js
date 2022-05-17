//5. Elabore um algoritmo que leia 5 valores inteiros e apresente na tela o maior e o menor deles.
const readlineSync = require('readline-sync')

let getNumbers = () => {
    let numbers = []
    for (let i = 0; i < 5; i++) {
        numbers[i] = readlineSync.questionInt(`Informe o numero ${i+1}: `)
    }
    return numbers.sort()
} 

let numbers = getNumbers()

function setBiggestAndSmallestNumber(number) {
    return console.log(
        `Maior numero: ${number[number.length-1]}\n` +
        `Menor numero: ${number[0]}`
    );
}

setBiggestAndSmallestNumber(numbers)