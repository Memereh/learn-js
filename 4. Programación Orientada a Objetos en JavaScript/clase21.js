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

var jeremy = new Persona('Jeremy', 'Vargas', 21, 1.85, 'M');
var barbara = new Persona('Barbara', 'Martinez',21, 1.50, 'F');
var jeff = new Persona('Jeff', 'Larryson', 50, 1.74, 'M');

barbara.saludar();




//RETO

Persona.prototype.soyAlto = function() {
    console.log(`Hola, soy ${this.nombre} y soy ${this.altura > 1.80 ? this.sexo === 'M' ?'alto':'alta' : this.sexo === 'M' ?'pequeño':'pequeña'}`)
}


jeremy.soyAlto()
barbara.soyAlto()
jeff.soyAlto()