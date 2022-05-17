//6 - Escreva um algoritmo para ler as dimensões de um triângulo (base e altura), calcular e escrever a área do triângulo. Sabendo que para calcular a área devemos usar a fórmula: A=(base x altura)/2
var readLine = require("readline-sync")

var base = readLine.questionInt("Informe a base do triangulo: ")
var height = readLine.questionInt('Informe a altura do triangulo: ')

var area = (base * height) / 2

console.log(`Area do triangulo: ${area.toFixed(2)}`)