//Questionário
const readlineSync = require('readline-sync')

var correct = 0

function quiz() {
   console.clear()
   var question = readlineSync.question(
      '1) Quais os tipos de declaracoes de variaveis em JavaScript?\n' +
         'A - String, Int e Float\n' +
         'B - &&, || e !\n' +
         'C - var, let e const\n' +
         'D - Nenhuma das anteriores\n'
   )
   if (question == 'C') {
      correct += 1
   }
   console.clear()

   question = readlineSync.question(
      '2) Qual e o sinal para atribuir um valor para uma variavel?\n' +
         'A - =\n' +
         'B - ==\n' +
         'C - ===\n' +
         'D - Nenhuma das anteriores\n'
   )
   if (question == 'A') {
      correct += 1
   }
   console.clear()

   question = readlineSync.question(
      '3) Quais sao os lacos de repeticoes em JavaScript\n' +
         'A - if, else if e else\n' +
         'B - switch case e array\n' +
         'C - for, while e function\n' +
         'D - Nenhuma das anteriores\n'
   )
   if (question == 'D') {
      correct += 1
   }
   console.clear()

   question = readlineSync.question(
      '4) De acordo com os operadores estudados informe quais destes representam apenas operadores de atribuicao:\n' +
         'A - && e =\n' +
         'B - -= e ==\n' +
         'C - <= e >=\n' +
         'D - Nenhuma das anteriores\n'
   )
   if (question == 'D') {
      correct += 1
   }
   console.clear()

   question = readlineSync.question(
      '5) Em HTML utilizamos essa simbologia para escrever um paragrago:\n' +
         'A - <h1> </h1>\n' +
         'B - <body> </body>\n' +
         'C - <p> </p>\n' +
         'D - Nenhuma das anteriores\n'
   )
   if (question == 'C') {
      correct += 1
   }
   console.clear()

   question = readlineSync.question(
      '6) Qual o termo utilizado em CSS quando queremos arredondar bordas?\n' +
         'A - border-radius\n' +
         'B - background-color\n' +
         'C - border-width\n' +
         'D - Nenhuma das anteriores\n'
   )
   if (question == 'A') {
      correct += 1
   }
   console.clear()

   question = readlineSync.question(
      '7) Qual o comando utilizado em JavaScript para ordenar valores de listas de forma crescente?\n' +
         'A - lista.push()\n' +
         'B - lista.sort()\n' +
         'C - lista.ordenar()\n' +
         'D - Nenhuma das anteriores\n'
   )
   if (question == 'B') {
      correct += 1
   }

   console.clear()
   console.log(`Voce acertou ${correct} alternativas!`)
   if (correct == 7) {
       console.log('Nota maxima. Parabens!!!'); 
   } else if (correct == 4) {
       console.log('Nota media. Cotinue assim!');
   } else {
       console.log('Nota baixa. Estude e patrique mais!');
   }
}

quiz()