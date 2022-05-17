const readlineSync = require('readline-sync')


var alunos = []

for (let i = 0; i < 2; i++) {
    let nome = readlineSync.question(`Nome ${i + 1}: `)
    let nota = readlineSync.questionFloat(`Nota ${i + 1}: `)
    let aluno = { nome, nota } 
    alunos.push(aluno)   
}

console.log(alunos)

