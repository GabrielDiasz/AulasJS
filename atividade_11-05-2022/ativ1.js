//5. Crie um vetor que armazene o nome de todos os meses do ano. Peça ao usuário que digite um número e ele informe qual o nome do mês correspondente.
const readlineSync = require('readline-sync')

var months = [
   'Janeiro',
   'Fevereiro',
   'Marco',
   'Abril',
   'Maio',
   'Junho',
   'Julho',
   'Agosto',
   'Setembro',
   'Outubro',
   'Novembro',
   'Dezembro'
]

var number = readlineSync.questionInt('Informe um numero para saber o mes: ')

while (number < 1 || number > 12) {
   number = readlineSync.questionInt('Informe um numero para saber o mes: ')
}

console.log(`Mes selecionado: ${months[number-1]}`);