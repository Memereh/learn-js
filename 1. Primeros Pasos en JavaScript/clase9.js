var x = 4, y = '4';

//x == y; // True
//x === y; // False

var jeremy = {
    nombre: 'Jeremy'
}

// var otraPersona = { //Si comparamos esto con el objeto jeremy dara False, debido a que no esta haciendo referencia a el objeto jeremy
//     nombre: 'Jeremy'
// }

// var otraPersona = jeremy; // Esto devolvera True por que estamos haciendo referencia al objeto jeremy, por lo tanto son iguales.

// var otraPersona = { // Esto nos seguira dando False, ya que aunque estemos llamando a los atributos del objeto jeremy, otraPersona es un nuevo objeto.
//     ...jeremy
// }

var otraPersona = jeremy;