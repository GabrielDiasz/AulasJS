var jair = 11
var carlos = 12
var neves = 50

let votosCandidatos = [
   { votosCandidato: jair, nome: 'Jair' },
   { votosCandidato: carlos, nome: 'Carlos' },
   { votosCandidato: neves, nome: 'Neves' }
]

votosCandidatos.sort((a, b) => {
   if (a.votosCandidato < b.votosCandidato) {
      return -1
   } else if (a.votosCandidato > b.votosCandidato) {
      return 1
   }
   return 0
})

console.log(
   `O vencedor é ${votosCandidatos[2].nome} com ${votosCandidatos[2].votosCandidato}`
)