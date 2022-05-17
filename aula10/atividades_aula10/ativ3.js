//3. Pedir para o usuário digitar quatro notas e imprimir na tela sua média aritmética.

const readlineSync = require('readline-sync')

function getGrades() {
   let grade = []
   for (let i = 0; i < 4; i++) {
      grade[i] = readlineSync.questionFloat(`Informe a nota ${i + 1}: `)
      while (grade[i] < 0 || grade[i] > 10) {
         grade.pop()
         grade[i] = readlineSync.questionFloat(`Informe a nota ${i + 1}: `)
      }
   }
   return grade
}

function setAverage(grades) {
   let average = 0
   for (i in grades) {
      average += grades[i]
   }
   return average / grades.length
}

let grades = getGrades()

console.log(`Media aritmetica: ${setAverage(grades).toFixed(1)}`)