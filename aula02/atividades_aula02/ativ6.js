/*6. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1:feminino 2:masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes
Fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7*/
const readlineSync = require("readline-sync")

const height = readlineSync.questionFloat("Informe sua atura: ").toFixed(2)
const gender = readlineSync.questionInt(
    "Informe seu sexo: " +
    "\n1 - Feminino"     +
    "\n2 - Masculino\n"
)

console.clear()

if (gender === 1) {
    console.log(`Peso ideal: ${((62.1 * height) - 44.7).toFixed(2)} Kg`)
} else if (gender === 2) {
    console.log(`Peso ideal: ${((72.7 * height) - 58).toFixed(2)} Kg`)
} else {
    console.log("Sexo invalido!")
}