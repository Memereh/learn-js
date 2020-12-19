var jeremy = {
    nombre: 'Jeremy',
    apellido: 'Vargas',
    altura: 1.85
}

var barbara = {
    nombre: 'Barbara',
    apellido: 'Martinez',
    altura: 1.50
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [jeremy, barbara, martin, dario, vicky, paula];

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura} metros`);
}