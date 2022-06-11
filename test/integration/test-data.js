const fs = require( 'fs' )
const { connection } = require('promise-mysql')

const database = require( '../../src/database' )

const TABLAS = [ 'peliculas']

const insertSqlFor = ( base, entidad ) =>
{
    //ruta del archivo
    const fileName = `${base}/database/${entidad}.sql`
    //lee el contenido del archivo y lo regresa como una cadena
    return fs.readFileSync( fileName, 'utf-8' )
}

const cargarDatos = ( base = '.' ) =>
{
    return database.withPool( connection =>
    {
        const borrarDatos = entidades => 
        {
            const length = entidades.length
            if( !length )
                return Promise.resolve()
            return connection.query( `DELETE FROM ${entidades[length - 1]}`) 
                .then(() => borrarDatos(entidades.slice(0, length - 1)))   
        }

        const insertarDatos = entidades =>
        {
            if( !entidades.length )
                return Promise.resolve()
            return connection.query( insertSqlFor( base, entidades[0]))    
            .then(() => insertarDatos(entidades.slice(1)))
        }
        //REGRESA A los datos de prueba original
        return borrarDatos( TABLAS )
        .then(() => insertarDatos( TABLAS ))
    })
}

module.exports = { cargarDatos }