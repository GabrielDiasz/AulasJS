/*Faça um programa em Pascal que leia um vetor de seis elementos numéricos inteiros, calcule e mostre:
a) A quantidade de números pares
b) Quais os números pares
c) A quantidade de números ímpares
d) Quais os números ímpares*/

const vetor = [1,2,3,4,5,6,7,8,9,10]
var quantidadePares = 0
var quantidadeImpares = 0
var pares = []
var impares = []

for (i in vetor) {
    if (vetor[i] % 2 == 0) {
        quantidadePares ++
        pares[i] = vetor[i]
    } else {
        quantidadeImpares ++
        impares[i] = vetor[i]
    }
}

for (i in vetor) {
    if (pares[i] == null) {
        pares[i] = 0
    }
    if (impares[i] == null) {
        impares[i] = 0
    }
}

console.log(
   `Quantidade de pares: ${quantidadePares}\n` +
   `Numeros pares: [ ${pares} ]\n` +
   `Quantidade de impares: ${quantidadeImpares}\n` +
   `Numeros impares: [ ${impares} ]`
)