var jeremy = {
    nombre: 'Jeremy',
    apellido: 'Vargas',
    edad: 21
}

var barbara = {
    nombre: 'Barbara',
    apellido: 'Martinez',
    edad: 21
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre  // es lo mismo que abajo
    var { nombre } = persona
    console.log(nombre.toLocaleUpperCase());
}

imprimirNombreEnMayusculas(jeremy);
imprimirNombreEnMayusculas(barbara);
// imprimirNombreEnMayusculas({nombre: 'Max'});
// imprimirNombreEnMayusculas({nombre: 'Vargas'}); // Dara errror por que imprimirNombreEnMayusculas quiere el nombre del objeto como atribto


// Reto COMPLETADO.
function imprimirNombreYEdad({nombre ,  edad}) {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(jeremy);
imprimirNombreYEdad(barbara);