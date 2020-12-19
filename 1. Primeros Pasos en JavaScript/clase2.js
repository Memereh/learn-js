var nombre = 'Jeremy',apellido = 'Vargas';

var nombreEnMayusculas = nombre.toLocaleUpperCase(); //Devuelve la variable con todo en mayusculas.
var apellidoEnMinusculas = apellido.toLocaleLowerCase(); //devuelve la variable con todo en minusculas.

var primeraLetraDelNombre = nombre.charAt(0); //Devuelve la letra en la posicion indicada del parametro de la funcion.
var cantidadDeLetrasDeNombre = nombre.length; //Devuelve la cantidad de letras en la variable


var nombreCompleto = nombre +' '+ apellido; //Une dos variables en una sola variable, en este caso nombre y apellido.
var nombreCompleto = `${nombre} ${apellido.toLocaleUpperCase()}`; //Lo mismo de arriba, pero si usamos las `` podemos agregar codigo JavaScript con ${}.

var str = nombre.substr(1,2);




//Reto

let userName = prompt('Cual es tu nombre?');

console.log(`La ultima letra de tu nombre es ${userName.charAt(userName.length - 1)}`);