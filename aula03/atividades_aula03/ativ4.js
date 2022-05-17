const readlineSync = require('readline-sync')

const code = readlineSync.questionInt(
    'Informe o codigo do pedido' +
    '\n100 Cachorro quente R$ 1,70' +
    '\n101 Bauru Simples   R$ 2,30' +
    '\n102 Bauru com ovo   R$ 2,60' +
    '\n103 Hamburguer      R$ 2,40' +
    '\n104 Cheeseburguer   R$ 2,50' +
    '\n105 Refrigerante    R$ 1,00\n'
)
const amount = readlineSync.questionInt('Informe a quantidade que deseja: ')

switch (code) {
    case 100:
        console.log(`Valor total do pedido: R$ ${(amount * 1.7).toFixed(2)}`)
        break
    case 101:
        console.log(`Valor total do pedido: R$ ${(amount * 2.3).toFixed(2)}`)
        break
    case 102:
        console.log(`Valor total do pedido: R$ ${(amount * 2.6).toFixed(2)}`)
        break
    case 103:
        console.log(`Valor total do pedido: R$ ${(amount * 2.4).toFixed(2)}`)
        break
    case 104:
        console.log(`Valor total do pedido: R$ ${(amount * 2.5).toFixed(2)}`)
        break
    case 105:
        console.log(`Valor total do pedido: R$ ${(amount * 1).toFixed(2)}`)
        break
    default:
        console.log('Codigo invalido!!!')
}
