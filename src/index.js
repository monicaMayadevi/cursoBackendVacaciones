const database = require( './database' )
const { server } = require( './server' )

const SERVER_PORT = 4000

database.init().then( () =>
{
    //inicializa el servidor
    server.listen( SERVER_PORT ).then(({ url }) =>
    {
        console.log( `Servidor ejecutando en ${ url }` )
    })
})


