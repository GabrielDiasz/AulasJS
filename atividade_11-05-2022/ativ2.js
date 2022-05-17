//1. Entre com os dados de 10 alunos de uma classe, recebendo as informações como nome e uma nota do aluno. Armazene estes dados em um vetor. Ao final do programa mostrar a média de nota da classe, e o nome do aluno que obteve maior nota.
const readlineSync = require('readline-sync')

var name = []
var grade = []
var average = 0
var bigger = 0
var nameBigger

for (let i = 0; i < 10; i++) {
   name.push(readlineSync.question(`Informe o nome do aluno ${i + 1}: `))
   grade.push(readlineSync.questionFloat(`Informe a nota do(a) ${name[i]}: `))

   while (grade < 0 || grade > 10) {
      grade.pop()
      grade = readlineSync.questionFloat(
         `Informe a nota do(a) ${name[i]}: `
      )
   }
   if (grade[i] > bigger) {
      bigger = grade[i]
      nameBigger = name[i]
   }
   average += grade[i]
}

average /= grade.length

console.log(
   `Media da turma: ${average.toFixed(1)}\n`+
   `${nameBigger} tirou ${bigger.toFixed(1)} sendo a maior nota da turma!`
);
