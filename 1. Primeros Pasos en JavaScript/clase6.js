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

function imprimirNombreEnMayusculas({ nombre }) { // Variable solo cambiara dentro de la funcion, fuera se mantendra el valor asignado anteriormente global
    console.log(nombre.toLocaleUpperCase());
}

imprimirNombreEnMayusculas(jeremy);
imprimirNombreEnMayusculas(barbara);
// imprimirNombreEnMayusculas({nombre: 'Max'});
imprimirNombreEnMayusculas({apellido: 'Vargas'}); // Dara errror por que imprimirNombreEnMayusculas quiere el nombre del objeto como atribto
