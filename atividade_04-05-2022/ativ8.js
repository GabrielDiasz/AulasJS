//13 - Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está correta e, caso não esteja, solicite novamente a senha. Se a senha entrada for a correta, deverá ser apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”.
const readlineSync = require('readline-sync')

var attemps = 3

for (let i = 0; password != 1234; i++) { 
   var password = readlineSync.questionInt('Informe a senha: ')
   if (password === 1234) {
      console.log('Senha correta!')
      break
   }
   if (attemps === 0) {
       console.log('Numero de tentativas esgotadas. Conta bloqueada!');
       break
   }
   console.log(`Senha incorreta voce tem mais ${attemps} tentativas!`)
   attemps-- 
}
