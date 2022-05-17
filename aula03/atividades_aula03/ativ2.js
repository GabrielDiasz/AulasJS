const readlineSync = require('readline-sync')

const grade = []
var average = 0

for (var i = 0; i < 2; i++) {
   grade.push(readlineSync.questionFloat(`Informe a nota ${i + 1}: `))
   average += grade[i]
}

average /= 2

if (average >= 0 && average <= 4) {
   console.log(`Reprovado com media ${average.toFixed(2)}`)
} else if (average >= 4.1 && average <= 7) {
   console.log(`Exame com media ${average.toFixed(2)}`)
} else {
   console.log(`Aprovado com media ${average.toFixed(2)}`)
}