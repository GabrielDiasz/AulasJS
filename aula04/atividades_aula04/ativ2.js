/*Chico tem 1,50m e cresce 2 centímetros por ano, enquanto Juca tem 1,10m e cresce 3
centímetros por ano. Construir um algoritmo que calcule e imprima quantos anos
serão necessários para que Juca seja maior que Chico*/

var chico = 1.5
var juca  = 1.1
var years = 0

while (juca < chico) {
    juca  += 0.03
    chico += 0.02
    years ++
}

console.log(`Sao necessarios ${years} anos para que Juca seja maior que Chico!`)