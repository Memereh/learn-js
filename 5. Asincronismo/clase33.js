const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true }


function obtenerPersonaje(id) {

    return new Promise( (resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id )}`
        $
            .get(URL, opts, data => {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

let onError = (id) => console.log(`El personaje con el id ${id} no pudo ser cargado.`)


let ids = [1, 2, 3, 4, 5, 6, 7]
let promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

    
// obtenerPersonaje(1)
//     .then(personaje => {
//         console.log(`El personaje 1 es ${personaje.name}`)
//         return(obtenerPersonaje(2))
//     })
//     .then(personaje => {
//         console.log(`El personaje 2 es ${personaje.name}`)
//         return(obtenerPersonaje(3))
//     })
//     .then(personaje => {
//         console.log(`El personaje 3 es ${personaje.name}`)
//         return(obtenerPersonaje(4))
//     })
//     .then(personaje => {
//         console.log(`El personaje 4 es ${personaje.name}`)
//         return(obtenerPersonaje(5))
//     })
//     .then(personaje => {
//         console.log(`El personaje 5 es ${personaje.name}`)
//         return(obtenerPersonaje(6))
//     })
//     .then(personaje => {
//         console.log(`El personaje 6 es ${personaje.name}`)
//         return(obtenerPersonaje(7))
//     })
//     .then(personaje => {
//         console.log(`El personaje 7 es ${personaje.name}`)
//     })
//     .catch(onError)