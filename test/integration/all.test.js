const testServer = require ( './test-server' )

const peliculas = require( './peliculas/peliculas' )

jest.setTimeout( 20000 )
describe ( 'Integration tests', () =>
{
  beforeAll( () => testServer.start() )
  afterAll( () => testServer.end() )

  peliculas.test()
})