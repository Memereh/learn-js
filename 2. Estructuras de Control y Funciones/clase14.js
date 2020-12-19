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
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
var dias = 0;

const META = jeremy.peso - 3;

while (jeremy.peso > META) {
    if (comeMucho()) {
        aumentarPeso(jeremy);
    }
    if (realizaDeporte()) {
        bajarDePeso(jeremy);
    }
    dias +=1;
}

console.log(`Pasaron ${dias} dias hasta que ${jeremy.nombre} adelgazo 3kg`)