//8 - Um cliente de um banco tem um saldo positivo de R$500,00.  Fazer um algoritmo que leia o cheque que entrou e calcule o saldo, mostrando (escrevendo) o saldo na tela.
var readLine = require("readline-sync")

var balance = 500
var incomingCheck = readLine.questionFloat("Digite o valor a ser depositado: ")

console.log(`Novo saldo ${(balance + incomingCheck).toFixed(2)} R$`)