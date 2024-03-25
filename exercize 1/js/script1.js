console.log ('JS Snacks Object')

    // Snack 1
//Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca,
//alimentazione (benzina,
//diesel, gpl, elettrico, metano).
//modello e Dividi le automobili in 3 array separati: nel primo array solo le auto a
//benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//Infine stampa separatamente i 3 array.


const cars = [
    {
     marca : 'Fiat', 
     modello: 'Punto',
     alimentazione: 'Benzina'
    },
    {
     marca : 'Ford', 
     modello: 'Fiesta',
     alimentazione: 'Metano'
    },
    {
     marca : 'Alfa Romeo', 
     modello: 'Giulietta',
     alimentazione: 'gpl'
    },
    {
     marca : 'Toyota', 
     modello: 'Auris',
     alimentazione: 'Elettrica'
    },
    {
     marca : 'Ford', 
     modello: 'Fiesta elettrica',
     alimentazione: 'Metano'
    },
    {
     marca : 'Lancia', 
     modello: 'Delta',
     alimentazione: 'Benzina'
    },
    {
     marca : 'Alfa Romeo', 
     modello: '159',
     alimentazione: 'Diesel'
    },
    {
     marca : 'Mercedez', 
     modello: 'smart',
     alimentazione: 'Diesel'
    },
    {
     marca : 'BMW', 
     modello: 'X1',
     alimentazione: 'Ibrida'
    },
    {
     marca : 'Fiat', 
     modello: 'Punto',
     alimentazione: 'gpl'
    }
]

const benzina = []
const diesel = []
const altro = []

for (let i = 0; i < cars.length; i++) {
    const car = cars[i]


    if (car.alimentazione === 'Diesel') {
        diesel.push(car)
        
    } else if (car.alimentazione === 'Benzina' ) {
        benzina.push(car)

    } else {
        altro.push(car)
    }    
}

console.log(benzina)
console.log(diesel)
console.log(altro)