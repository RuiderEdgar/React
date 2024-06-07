import { getSaludo } from "../../src/base-pruebas/02-template-string.js";

describe('Prueba en 02-template-string', ()=>{
    test('getSaludo debe retornar "Hola Edgar"', ()=>{
        const name = 'Edgar';

        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    })
})