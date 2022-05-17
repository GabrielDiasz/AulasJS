const readlineSync = require('readline-sync')

const code = readlineSync.questionInt('Infome o codigo: ')

switch (code) {
   case 1:
      console.log('Alimento não perecivel')
      break
   case 2:
   case 3:
   case 4:
      console.log('Alimento perecivel')
      break
   case 5:
   case 6:
      console.log('Vestuario')
      break
   case 7:
      console.log('Higiene Pessoal')
      break
   case 8:
   case 9:
   case 10:
   case 11:
   case 12:
   case 13:
   case 14:
   case 15:
      console.log('Limpeza e Utensilios Domesticos')
      break
   default:
      console.log('Codigo invalido!')
}
