const { gql } = require( 'apollo-server' )

const typeDefs = gql`
    type Pelicula
    {
        id: Int !
        nombre:String !
        clasificacion:Clasificacion !
        genero:Genero !
    }

    enum Clasificacion
    {
      A
      B
      C
    }
    enum Genero
    {      
      Accion
      Infantil
      Terror
    }

    type RespuestaPeliculas
    {
        success: Boolean !
        peliculas: [ Pelicula ! ] # no nulo si success == true

    }
    type Query
    {
        peliculas: RespuestaPeliculas !

    }
`
module.exports = typeDefs