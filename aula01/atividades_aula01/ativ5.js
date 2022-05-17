//5 – Pedir para o usuário informar o ano em que nasceu e o programa deve retornar a idade do usuário.
var readLine = require("readline-sync")

const date = new Date
const year = readLine.questionInt("Informe o ano que nasceu: ")

console.log(`Sua idade é: ${date.getFullYear() - year}`)