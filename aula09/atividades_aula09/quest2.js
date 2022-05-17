/*Faça um programa em Pascal que receba o nome de cinco produtos e seus respectivos preços, armazeneos em dois vetores separados, um para os produtos e outro para os preços. O programa deve calcular e mostrar:
a) A quantidade de produtos com preço inferior a R$ 50,00;
b) O nome dos produtos com preço entre R$ 50,00 e R$ 100,00;
c) A média dos preços dos produtos com preço superior a R$ 100,00.*/
const readlineSync = require('readline-sync')

let products = []
let amountLess50 = 0
let average = 0
let amountOver100 = 0

for (let i = 0; i < 5; i++) {
    let name = readlineSync.question(`Informe o nome do produto ${i+1}: `)
    let price = readlineSync.questionFloat(`Informe o preco do(a) ${name}: R$ `)
    let product = {name , price}
    products.push(product)
}

let names = []

for (i in products) {
    if (products[i].price < 50) {
        amountLess50 ++
    } else if (products[i].price >= 50 && products[i].price <= 100) {
        names.push(products[i].name) 
    } else if (products[i].price > 100){
        amountOver100 ++
        average += products[i].price
    }
}

average /= amountOver100
console.clear()

console.log(
    `A quantidade de produtos com preço inferior a R$ 50,00: ${amountLess50}\n` +
    `O nome dos produtos com preço entre R$ 50,00 e R$ 100,00: ${names.join(', ')}\n` +
    `A média dos preços dos produtos com preço superior a R$ 100,00: R$ ${average.toFixed(2)}`
);