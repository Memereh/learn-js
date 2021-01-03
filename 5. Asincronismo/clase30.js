const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true }


function obtenerPersonaje(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id )}`

    $.get(URL, opts, function (persona){
        console.log(`Hola, yo soy ${persona.name}`)
    })
}



for (let i = 1; i <= 82; i++) {
    let ic = i + 1

    console.log(obtenerPersonaje(i, function () {
        obtenerPersonaje(ic)
    }))
}