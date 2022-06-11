//es asincrona porque lee de BD
const leerPeliculas = () => Promise.resolve(
    [
        { id: 1, nombre: 'Bambi', clasificacion: 'A', genero: 'Infantil' },
        { id: 2, nombre: 'Pesadilla en la calle del infierno', clasificacion: 'C', genero: 'Terror' }      
    ]
)


const listar = async ( context ) =>
{
    //se hace una peticion de servicios antes, y eso se hace usando la info del contexto
    //esto deberá en un futuro leerse de la BD
    const peliculas = await leerPeliculas()
    if( !peliculas )
        return { success: false }
    return { success: true, peliculas }    
}

//para que la pueda ver el indice del resolver
module.exports = { listar }