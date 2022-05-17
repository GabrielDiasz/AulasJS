/*Chico tem 1,50m e cresce 2 centímetros por ano, enquanto Juca tem 1,10m e cresce 3
centímetros por ano. Construir um algoritmo que calcule e imprima quantos anos
serão necessários para que Juca seja maior que Chico*/
var chico = 1.5
var juca = 1.1
var year = 0

do {
   chico += 0.02
   juca += 0.03
   year++
} while (juca < chico)

console.log(year)
