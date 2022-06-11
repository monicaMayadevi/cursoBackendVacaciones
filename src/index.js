
const SERVER_PORT = 4000

//inicializa el servidor
server.listen( SERVER_PORT ).then(({ url }) =>
{
    console.log( `Servidor ejecutando en ${ url }` )
})


