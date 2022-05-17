//Faça um algoritmo que conte até o número que o usuário informar

const readlineSync = require('readline-sync')

const number = readlineSync.questionInt('Informe um numero para iniciar a contagem: ')

for (let i = 0; i <= number; i++) {
    console.log(i);
}