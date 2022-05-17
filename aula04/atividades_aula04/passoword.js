const readlineSync = require('readline-sync')

var password = readlineSync.questionInt('Informe a senha: ')
var count = 3

if (password === 1234) {
   console.log('Senha correta!')
} else {
   while (password != 1234) {
      password = readlineSync.questionInt(
         `Senha invlida! Voce tem mais ${count} tentativas.`
      )
      count--
      if (count === 0) {
         console.log('Tentativas encerradas. Conta bloqueada!')
         break
      }
      if (password === 1234) {
         console.log('Senha correta!')
         break
      }
   }
}
