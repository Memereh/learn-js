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


//RETO COMPLETADO
function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es ${persona.edad >= 18 ? 'mayor':'menor'} de edad`);
}
