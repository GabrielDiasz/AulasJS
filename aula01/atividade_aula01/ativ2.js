//2 - Pedir para o usuário digitar dois números e imprimir a soma dos dois números.
var readLine = require("readline-sync")

var n1 = readLine.questionInt("Informe o primeiro numero: ")
var n2 = readLine.questionInt("Informe o segundo numero: ")

console.log(`Soma dos numeros informados: ${n1 + n2}`)