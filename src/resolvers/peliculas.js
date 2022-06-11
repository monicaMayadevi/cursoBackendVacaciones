//solo falta la validación de permisos
const listar = async ({ dataSources })=>
{
    const peliculas = await dataSources.peliculas.listar()

    if ( !peliculas )
        return { success: false }
    return { success: true, peliculas }
}


//para que la pueda ver el indice del resolver
module.exports ={listar}