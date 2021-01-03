const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true }
const onPeopleResponse = (persona) => console.log(`Hola, yo soy ${persona.name}`)


function obtenerPersonaje(id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id) }`
    $.get(URL, opts, onPeopleResponse)
}



for (let i = 1; i <= 82; i++) {
    console.log(obtenerPersonaje(i))
}