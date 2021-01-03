
class Persona {
    constructor(nombre, apellido, edad, altura, sexo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
        this.sexo = sexo
    }
    saludar (fn) {
        // let nombre = this.nombre;
        // let apellido = this.apellido;
        let {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido, false)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido,edad,altura,sexo) {
        super(nombre,apellido,edad,altura,sexo)
    }

    saludar (fn) {
        // let nombre = this.nombre;
        // let apellido = this.apellido;
        let {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mira, no sabia que eras desarrollador/a.`)
    }
}


var jeremy = new Desarrollador('Jeremy', 'Vargas', 21, 1.85, 'M');
var barbara = new Persona('Barbara', 'Martinez',22, 1.50, 'F');
var jeff = new Persona('Jeff', 'Larryson', 50, 1.74, 'M');

jeremy.saludar(responderSaludo);
barbara.saludar(responderSaludo);
jeff.saludar();