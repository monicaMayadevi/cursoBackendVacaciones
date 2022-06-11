const chai = require( 'chai' )
const { isType } = require('graphql')

const resolvers = require( '../../../src/resolvers' )

const { expect } = chai

describe( 'Resolvers / peliculas', () =>
{
    describe( 'listar', () => 
    {
        it('debe listar peliculas', async () => 
        {
            //asi esta estructurado en el index
            //recibia dos argumentos que no me importan y el contexto que ahora no me importa
            const result = await resolvers.Query.peliculas( null, null, null)
            expect( result ).to.deep.equal(
                {
                    success: true,
                    peliculas: 
                    [
                        { id: 1, nombre: 'Bambi', clasificacion: 'A', genero: 'Infantil' },
                        { id: 2, nombre: 'Pesadilla en la calle del infierno', clasificacion: 'C', genero: 'Terror'}
                    ]
                })
        })
    })
})