// Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está correta e, caso não esteja, solicite novamente a senha. Se a senha entrada for a correta, deverá ser apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”.

const readlineSync = require('readline-sync')

//sennha == 1234

let getPassword = () => {
    let password = 0
    password = readlineSync.questionInt('Informe a senha: ')
    return password
}

let password = getPassword()

function passwordStatus (password) {
    let attemps = 2
    if (password === 1234) {
        return console.log('Senha correta');
    } else {
        while (password != 1234) {
            password = readlineSync.questionInt(
                `Senha incorreta! Voce tem mais ${attemps} tentativas.\n` +
                `Informe a senha novamente: `
            )
            if (attemps == 0) {
                console.log('Tentativas esgotadas. Contate o adm do sistema!');
                break
            }
            if (password === 1234) {
                console.log('Senha correta');
                break
            }
            attemps--
        }
    }
}

passwordStatus(password)