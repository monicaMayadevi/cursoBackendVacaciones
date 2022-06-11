//este se llama desde la prueba
const { ApolloServer } = require ( 'apollo-server' )
//son como controladores
const resolvers = require( './resolvers' )
const typeDefs = require( './schema' )

const SERVER_PORT = 4000
//instancia del apollo y la definición del mismo
const server = new ApolloServer(
{
    cors: true,
    context: () => ({}),
    dataSources: () => ({}),
    resolvers,
    typeDefs
})

//Solo para pruevas de integracion
module.exports = { server }

