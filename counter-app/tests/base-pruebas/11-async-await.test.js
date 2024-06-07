import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Probando 11-async-await', ()=>{
    
    test('getImagen debe retornar un URL de un gif', async()=>{
        const url = await getImagen()
        console.log(url)
        expect(typeof url).toBe('string')
    })
    test('getImagen debe retornar un error si no tenemos api key', async()=>{
        const resp = await getImagen()
        
        expect(resp).toBe('No se encontró la imagen')
    })
    
})