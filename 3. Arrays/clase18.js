var jeremy = {
    nombre: 'Jeremy',
    apellido: 'Vargas',
    altura: 1.85
}

var barbara = {
    nombre: 'Barbara',
    apellido: 'Martinez',
    altura: 1.50
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({altura}) => altura > 1.8;


var personas = [jeremy, barbara, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta)

// var personasAltas = personas.filter(function (persona) {
//     return persona.altura > 1.8;
// })

console.log(personasAltas);


// RETO COMPLETADO

const esBaja = ({altura}) => altura < 1.8;
var personasBajas = personas.filter(esBaja)
console.log(personasBajas)