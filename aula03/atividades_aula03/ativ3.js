const readlineSync = require('readline-sync')

const number1 = readlineSync.questionFloat('Insira o primeiro numero: ')
const number2 = readlineSync.questionFloat('Insira o segundo numero: ')

const code = readlineSync.questionInt(
    '\nInforme a operacao que deseja:' +
    '\n1 - Media dos numeros'          +
    '\n2 - Diferenca dos numeros'      +
    '\n3 - Produto dos numeros'        +
    '\n4 - Divisao do primeiro pelo segundo\n' 
)

switch (code) {
    case 1:
        console.log(
            `Media dos numeros: ${((number1 + number2)/2).toFixed(2)}`
        )
        break
    case 2:
        if (number1 > number2) {
            console.log(`A diferenca e: ${number1} e maior que ${number2}`)
        } else if (number2 > number1) {
            console.log(`A diferenca e: ${number2} e maior que ${number1}`)
        } else {
            console.log('Não tem diferenca, os numeros sao iguais!')
        }
        break
    case 3:
        console.log(`Produto dos numeros digitados: ${number1 * number2}`)
        break
    case 4:
        console.log(`Divisao de ${number1} por ${number2}: ${(number1/number2.toFixed(2))}`)
        break
    default:
        console.log('Opcao invalida!!!')
}