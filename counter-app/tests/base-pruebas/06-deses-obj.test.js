import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe de retornar un objeto", ()=>{
    //1
    const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
    };

    const { edad, clave } = persona;
    
    //2
    const data = usContext(persona)

    //3
    expect(data).toStrictEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });

  });
});