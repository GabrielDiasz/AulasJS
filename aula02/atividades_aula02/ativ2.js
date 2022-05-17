const readline = require('readline-sync')
var nasc = readline.questionInt('Ano de nascimento: ')
var nome = readline.question('Nome: ')
var date = new Date()
var anoAtual = date.getFullYear()
var idade = anoAtual - nasc

if (idade < 16) {
   console.log(`${nome} Nao pode votar pois sua idade é ${idade}`)
} else if ((idade >= 16 && idade < 18) || idade >= 68) {
   console.log(`${nome} Sua idade é ${idade} e o voto é opcional`)
} else {
   console.log(`${nome} Sua idade é ${idade} e o voto é obrigatorio`)
}
