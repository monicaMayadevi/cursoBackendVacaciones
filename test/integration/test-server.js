//librerias para el servidor de pruebas
const { execute } = require( 'apollo-link' )
const { HttpLink } = require( 'apollo-link-http' )
const fetch = require( 'node-fetch' )

//liga al codigo donde se define el server
const { server } = require( '../../src/server' )

let testServer

const start = async () =>
{

    //define el servidor de pruebas
    const httpServer = await server.listen( { port: 0 } )
  const link = new HttpLink(
  {
      uri: `http://localhost:${httpServer.port}`,
      fetch
  })
  const executeFuntion = ({ query }) =>
  execute( link, { query, variables: {} })

  testServer =
  {
    links: {link},
    end: () => httpServer.server.close(),
    execute: executeFuntion
  }
}

const end = () =>{
testServer.end()
}
module.exports =
{
get: () => testServer,
start,
end
}