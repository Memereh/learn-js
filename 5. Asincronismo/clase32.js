const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true }


function obtenerPersonaje(id) {

    return new Promise( (resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id )}`
        $
            .get(URL, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })

    // $.get(URL, opts, callback).fail(() => {
        // console.log(`Error, no se pudo obtener el personaje ${id}`)
    // })

}

let onError = (id) => console.log(`El personaje con el id ${id} no pudo ser cargado.`)

obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError)



/* Esto de abajo es solo un intento de prueba para realizar promesas con for. */
// for (let i = 1; i <= 82;i++ ) {
//     obtenerPersonaje(i)
//     .then(function (personaje) {
//         console.log(`El personaje ${i} es ${personaje.name}`)
//     })
//     .catch(onError)
// }