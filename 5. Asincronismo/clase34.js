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



async function obtenerPersonajes() {
    let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let promesas = ids.map(id => obtenerPersonaje(id))
    try{
        let personajes = await Promise.all(promesas)
        for (let i= 0; i <= ids.length - 1; i++){//Hice este for para que recorra cada uno de los datos del array.
            console.log(`Hola, soy ${personajes[i].name}`)
        }
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()