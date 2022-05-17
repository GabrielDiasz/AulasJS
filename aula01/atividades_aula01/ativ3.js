//3 - Pedir para o usuário digitar quatro notas e imprimir na tela sua média aritmética.
var readLine = require('readline-sync')

//lista de notas
var grades = []
//variável para guardar a média
var avarage = 0

//input das 4 notas já somando na váriavel média
for (var i = 0; i < 4; i++) {
  grades.push(readLine.questionFloat(`Informe a nota ${i + 1}: `))
  avarage += grades[i]
}

//result
console.log(`Media das notas: ${(avarage / 4).toFixed(2)}`)
