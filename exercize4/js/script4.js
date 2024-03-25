console.log ('JS Snacks Object')
 
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
// nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [
    {
     nome: 'Marco',
     cognome: 'Marchi',
     età: '22'
    },
    {
     nome: 'Valerio',
     cognome: 'Valeri',
     età: '17'
    },
    {
     nome: 'Simone',
     cognome: 'Simoni',
     età: '15' 
    },
    {
     nome: 'Davide',
     cognome: 'Davidi',
     età: '18'
    },
    {
     nome: 'Alessio',
     cognome: 'Alessi',
     età: '25'
    },
]
console.log (persone)

const puoiGuidare = []

for (let i = 0; i < persone.length; i++) {
    const persona = persone[i]


    if (persona.età >= '18') {
        puoiGuidare.push(persona.nome + ' ' + persona.cognome + ' puoi guidare' )
     }
}
console.log (puoiGuidare) 
