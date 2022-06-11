const peliculas = require( './peliculas' )
//es un indice con tolo que se que puede invocar en el servicio, el no lo hace todo lo delega
const Query = 
{
    //el parametro "_" significa que no le importa
    //1: se ignora es un identificador, 2:para argumentos como el numero de pelicula 
    //y el tercero es el contexto y ese si nos importa, y se usa para la verificacion de permisos ya que nos da los headers http
    peliculas: ( _,__, context ) => peliculas.listar ( context )
}

module.exports = { Query }