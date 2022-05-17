//2. Uma empresa de desenvolvimento de softwares paga a seu vendedor um fixo de R$500 por mês, mais um bônus de R$50 por sistema vendido. Faça um algoritmo que leia quantos softwares o funcionário vendeu e determine o salário total do funcionário. Mostre as informações que você achar necessário.
const readlineSync = require('readline-sync')

let fixedSalary = 500
let amountSales = readlineSync.questionInt('Informe a quantidade de softwares vendidos: ')

function calculateBonus (amount) {
    return (amount * 50) + fixedSalary
}

console.log(`Salario total: R$ ${calculateBonus(amountSales).toFixed(2)}`)