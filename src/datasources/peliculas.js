const { DataSource } = require( 'apollo-datasource' )

class PeliculasDataSource extends DataSource
{
    initialize( config )
    { this.context = config.context}

    listar()
    {
        return Promise.resolve(
            [
                { id: 1, nombre:'Bambi', clasificacion:'A', genero:'Infantil'},
                { id: 2, nombre:'Pesadilla en la calle del infierno', clasificacion:'C', genero:'Terror'},
            ]
        )
    }
}

module.exports = PeliculasDataSource