//1. Faça um algoritmo que lê uma temperatura em Fahrenheit e calcula a temperatura correspondente em Celsius. Ao final o programa deve exibir as duas temperaturas. – Usar a fórmula: C = (5 * (F-32) / 9)
const readlineSync = require('readline-sync')

let tempF = readlineSync.questionFloat('Informe uma temperatura em Fahrenheit: ')

function tempC (temp) {
    return (5 * (temp - 32)) / 9
}

console.log(`Temperatura em Celsius: ${tempC(tempF).toFixed(1)}`)