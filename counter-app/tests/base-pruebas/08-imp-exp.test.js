import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas 08-imp-exp', () => { 
    test('getHeroesById Debe retornar un heroe por ID', ()=>{
        const id = 1

        const heroe = getHeroeById(id)

        expect(heroe).toStrictEqual({
          id: 1,
          name: "Batman",
          owner: "DC",
        });
    })

    test("getHeroesById Debe retornar undefined si no existe",()=>{
        const id=100;
        const heroe = getHeroeById(id);

        // expect(heroe).toBe(undefined);
        expect(heroe).toBeFalsy();
    });

    // Tarea:
    //get
    test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", ()=>{
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        const longitudArrHeroes = heroes.length

        expect(longitudArrHeroes).toBe(3)

        // expect(heroes).toEqual([
        //   { id: 1, name: "Batman", owner: "DC" },
        //   { id: 3, name: "Superman", owner: "DC" },
        //   { id: 4, name: "Flash", owner: "DC" },
        // ]);

        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });

    test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", ()=>{
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner)
        const longitudArrHeroes = heroes.length

        expect(longitudArrHeroes).toBe(2)
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });
 })