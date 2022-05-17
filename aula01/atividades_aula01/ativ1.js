//1 - Pedir para o usuário digitar um número e imprimir este número na tela.
var readLine = require(`readline-sync`)

var n = readLine.question(`Digite um numero: `)
console.log(`Numero informado: ${n}`)