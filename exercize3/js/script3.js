console.log ('JS Snacks Object')

// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

const animali = [
    {
     nome: 'Bradipo',
     famiglia: 'Bradypodidae',
     classe: 'Mammifero'
    },
    {
     nome: 'Panada',
     famiglia: 'Orsi',
     classe: 'Mammifero'
    },
    {
     nome: 'Cmaleonte',
     famiglia: 'Lucertole',
     classe: 'Rettili'
    },
    {
     nome: 'Tardigrado',
     famiglia: 'celomati',
     classe: 'Protostomia'
    },
    {
     nome: 'orca',
     famiglia: 'delfini',
     classe: 'Mammifero'
    },

]

const mammiferi = []

for (let i = 0; i < animali.length; i++) {
    const specie = animali[i]
    console.log(i, specie.nome, specie.classe)


    if (specie.classe === 'Mammifero') {
        mammiferi.push(specie) }
}
console.log (mammiferi) 