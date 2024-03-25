console.log ('JS Snacks Object')

const stringhe = ['Pippo','PLUTO','Paperino','Ciao']
const nuoveStringhe = []

for (let i = 0; i < stringhe.length; i++) {
    const stringa = stringhe[i];
    const stringaMinuscola = stringa.toLowerCase()
    const stringaMaiuscola = stringa.toUpperCase()

  console.log(stringa, stringaMinuscola, stringaMaiuscola)

    const Minuscolo = stringaMinuscola.substring(1)
    console.log(Minuscolo)

    const Maiuscolo = stringaMaiuscola.substring(0,1)
    console.log(Maiuscolo)
    
    
    const MaiuscoloMinuscolo = Maiuscolo + Minuscolo
    nuoveStringhe.push(MaiuscoloMinuscolo)
    
}

console.log (nuoveStringhe)