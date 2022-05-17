//4. Escrever um algoritmo que leia o nome e as três notas obtidas por um aluno durante o semestre. Calcular a sua média (aritmética), informar o nome e sua menção aprovado (media &gt;= 7), Reprovado (media &lt;= 5) e Recuperação (media entre 5.1 a 6.9)
const readlineSync = require('readline-sync')

let getName = () => {
    let name = readlineSync.question(`Nome do aluno: `)
    return name
}

let name = getName()

let getStudent = () => {
    let grades = []
    for (let i = 0; i < 3; i++) {
        grades[i] = readlineSync.questionFloat(`Informe a nota ${i + 1} do(a) ${name}: `)
        while (grades[i] < 0 || grades[i] > 10) {
            grades.pop()
            grades[i] = readlineSync.questionFloat(
               `Informe a nota ${i + 1} do(a) ${name}: `
            )
        }
    }
    return grades
}

let studentGrades = getStudent()

function setAverage(studentGrades) {
    let average = 0
    for (i in studentGrades) {
        average += studentGrades[i]
    }
    return average / studentGrades.length
}

let studentAverage = setAverage(studentGrades)

function studentStatus () {
    if (studentAverage >= 7) {
       return console.log(
          `${name} esta aprovado com media ${studentAverage.toFixed(1)}`
       )
    } else if (studentAverage > 5 && studentAverage < 7) {
       return console.log(
          `${name} esta de recuperacao com media ${studentAverage.toFixed(1)}`
       )
    } else {
       return console.log(
          `${name} esta reprovado com media ${studentAverage.toFixed(1)}`
       )
    }
}

studentStatus()