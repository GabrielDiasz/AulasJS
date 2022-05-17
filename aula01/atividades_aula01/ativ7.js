//7 - ler o nome de uma pessoa, a sua idade e o seu salário e mostrar as informações.
var readLine = require("readline-sync")

const name = readLine.question("Informe seu nome: ")
const age  = readLine.questionInt("Informe sua idade: ")
const wage = readLine.questionFloat("Informe seu salario: ")

console.log(`${name} tem ${age} anos de idade e recebe ${wage.toFixed(2)}R$ de salario!!!`)