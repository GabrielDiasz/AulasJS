//4 - Faça um algoritmo que lê uma temperatura em Fahrenheit e calcula a temperatura correspondente em Celsius. Ao final o programa deve exibir as duas temperaturas. – Usar a fórmula: C = (5 * (F-32) / 9)
var readLine = require("readline-sync")

var tempF = readLine.questionFloat("Informe uma temperatura em Fahrenheit: ")
var tempC = (5 * (tempF - 32)) / 9

console.log(`Temperatura em Fahrenheit: ${tempF.toFixed(2)}F`)
console.log(`Temperatura em Celsius: ${tempC.toFixed(2)}°`)