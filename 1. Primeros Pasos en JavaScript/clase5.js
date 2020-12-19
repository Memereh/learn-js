var nombre = 'Jeremy';


function imprimirNombreEnMayusculas() { // Variable 'nombre' cambiara de valor de forma GLOBAL.
    nombre = nombre.toLocaleUpperCase();
    console.log(nombre);
}

function imprimirNombreEnMayusculas(n) { // Se le asigna una nueva variable que luego se puede trabajar con el el parametro dentro de la funcion "imprimirNombreEnMayusculas(nombre);"
    n = n.toLocaleUpperCase();
    console.log(n);
}

function imprimirNombreEnMayusculas(nombre) { // Variable solo cambiara dentro de la funcion, fuera se mantendra el valor asignado anteriormente global
    nombre = nombre.toLocaleUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);