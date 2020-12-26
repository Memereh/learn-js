/*
    Apuntes:
        -Hablar de objetos en javascript es hablar de prototipos.
        -this hace referencia al nuevo objeto que se acaba de crear.
        -la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
        -La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.
*/


function Persona(nombre, apellido, edad, altura, sexo) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
    this.sexo = sexo
    return this
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() { // Lo volvemos a dejar como una funcion normal ya que si lo dejamos como arrow function tomara 'this' como windows.
    return this.altura > 1.8
}
var jeremy = new Persona('Jeremy', 'Vargas', 21, 1.85, 'M');
var barbara = new Persona('Barbara', 'Martinez',21, 1.50, 'F');
var jeff = new Persona('Jeff', 'Larryson', 50, 1.74, 'M');

jeremy.soyAlto();
barbara.soyAlto();
jeff.soyAlto();
