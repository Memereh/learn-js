var jeremy = {
    nombre: 'Jeremy',
    apellido: 'Vargas',
    edad: 21,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones (persona) {
    console.log(`${persona.nombre} es:`);
    if (persona.ingeniero === true) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }
    if (persona.cocinero === true) {
        console.log('Cocinero')
    }
    if (persona.cantante === true) {
        console.log('Cantante')
    }
    if (persona.dj === true) {
        console.log('Dj')
    }
    if (persona.guitarrista === true) {
        console.log('Guitarrista')
    }
    if (persona.drone === true) {
        console.log('Piloto de Drones')
    }
}


const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (persona) { //Funcion Anonima.
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD; //Funcion Arrow

//RETO COMPLETADO (Version de Sacha(Profesor))
function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad.`)
    } else {
        console.log(`${persona.nombre} es menor de edad.`)
    }
}


// function permitirAcceso(persona) {
//     if (!esMayorDeEdad(persona)) {
//         console.log('Acceso Denegado');
//     }
// }

// RETO COMPLETADO, FUNCION FLECHA
const permitirAcceso = (persona) => !esMayorDeEdad(persona) ? 'Acceso Denegado':'Acceso Concedido';