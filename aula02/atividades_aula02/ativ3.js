const readline = require('readline-sync')

var senha = readline.question('Qual a senha: ')

if (senha === '1234') {
   console.log('Acesso Permitido')
} else {
   console.log('Acesso Negado')
}
