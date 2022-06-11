//este se llama desde la prueba
const { ApolloServer } = require('apollo-server')

//son como controladores
const resolvers = require( './resolvers' )
const typeDefs = require('./schema')

const PeliculasDataSource = require ('./datasources/peliculas')


//instancia del apollo y la definición del mismo
const server = new ApolloServer(
    {
        cors: true,
        context: () => ({}),
        dataSources: () => 
        ({
        //habra uno por cada entidad
        peliculas: new PeliculasDataSource()
        }),
        resolvers,
        typeDefs
    })


//Solo para pruevas de integracion
module.exports = { server }

