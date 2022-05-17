//2. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes, e que exiba a lista desses nomes na tela. Após exibir essa lista, o programa deve mostrar também os nomes na ordem inversa em que o usuário os digitou, um por linha.
const readlineSync = require('readline-sync')

var names = []

for (let i = 0; i < 5; i++) {
    names.push(readlineSync.question(`Informe o nome ${i + 1}: `))
}

console.log(
    `Lista dos nomes informados: [ ${names} ]\n` +
    `Lista na ordem inversa: [ ${names.reverse()} ]`
)