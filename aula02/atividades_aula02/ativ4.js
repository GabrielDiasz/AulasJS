//As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
const readlineSync = require("readline-sync")

var amountApple = readlineSync.questionInt("Informe o numero de macas compradas: ")

if (amountApple >= 1 && amountApple <= 11) {
    console.log(`Valor total da compra: ${(amountApple *= 0.3).toFixed(2)} R$`)
} else if (amountApple >= 12) {
    console.log(`Valor total da compra: ${(amountApple *= 0.25).toFixed(2)} R$`)
} else {
    console.log(`Compra uma maca ai brother :)`)
}