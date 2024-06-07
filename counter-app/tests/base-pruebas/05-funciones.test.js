import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', ()=>{
        const testUser = {
          uid: "ABC123",
          username: "El_Papi1502",
        };

        const user = getUser();
        
        expect(testUser).toStrictEqual(user)
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        //1
        const name = 'Edgar'

        const testUserActive = {
          uid: "ABC567",
          username: name,
        }
        //2
        const userActive = getUsuarioActivo(name);

        //3
        expect(testUserActive).toStrictEqual(userActive)
        expect(name).toBe(userActive.username)
    })
})