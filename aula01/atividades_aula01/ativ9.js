//9 - Uma empresa de desenvolvimento de softwares paga a seu vendedor um fixo de R$500  por mês, mais um bônus de R$50 por sistema vendido.  Faça um algoritmo que leia quantos softwares o funcionário vendeu e determine o salário total do funcionário. Mostre as informações que você achar necessário.
var readLine = require("readline-sync")

var fixedSalary = 500
var amountSales = readLine.questionInt("Informe quantos softwares foram vendidos: ")
var saleBonus = 50 * amountSales

console.log(`Salario baseado na quantidade de sistemas vendidos ${(fixedSalary + saleBonus).toFixed(2)} R$`)