
class Persona {
    constructor(nombre, apellido, edad, altura, sexo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
        this.sexo = sexo
    }
    saludar () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido,edad,altura,sexo) {
        super(nombre,apellido,edad,altura,sexo)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
    }
}


var jeremy = new Desarrollador('Jeremy', 'Vargas', 21, 1.85, 'M');
var barbara = new Persona('Barbara', 'Martinez',22, 1.50, 'F');
var jeff = new Persona('Jeff', 'Larryson', 50, 1.74, 'M');