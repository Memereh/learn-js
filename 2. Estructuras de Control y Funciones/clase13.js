var jeremy = {
    nombre: 'Jeremy',
    apellido: 'Vargas',
    edad: 21,
    peso: 100
}

console.log(`Al inicio del año ${jeremy.nombre} pesa ${jeremy.peso} kg`);

const DIAS_DEL_ANNIO = 365;
const INCREMENTO__PESO = 0.200;

const aumentarPeso = persona => persona.peso += INCREMENTO__PESO;
const bajarDePeso = persona => persona.peso -= INCREMENTO__PESO;


for (var i = 1; i <= DIAS_DEL_ANNIO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarPeso(jeremy);
    } else if (random < 0.5){
        bajarDePeso(jeremy);
    }
}

console.log(`Al final del año ${jeremy.nombre} pesa ${jeremy.peso.toFixed(1)} kg`);