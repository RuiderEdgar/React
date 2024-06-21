/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";
//importarlo especificamente al archivo del mock
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHook>", () => {
  const mockIncremen = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncremen,
  });

  beforeEach(() => { 
    jest.clearAllMocks()
  })

  test('Debe de mostrar el componente por defecto', () => {
    //cuando se use el mock, es cuando se debe de implementar en los test que se renderice el componente
    //Entonces simulamos los valores de retorno de este useFetch
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })
    
    render(<MultipleCustomHook />)

    expect(screen.getByText('Cargando...')).toBeTruthy()
    expect(screen.getByText('Información de Pokemón')).toBeTruthy()

    const nextButton = screen.getByRole('button', {name: 'Siguiente'})
    expect(nextButton.disabled).toBeFalsy()
  })

  test('Debe de mostrar la data de pokemon', () => {
    render(<MultipleCustomHook />)
    useFetch.mockReturnValue({
      data: {
          id: 1,
          name: "Bulbasaur",
          sprites: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny",
          }
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />)
    //Adaptandolo al de pokemon
    expect(screen.getByText("Bulbasaur")).toBeTruthy();
    expect(screen.getAllByRole('img').length).toBe(4);

  })

  test('Debe de llamar la funcion de incrementar', () => {

    
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Bulbasaur",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny",
          back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });
    
    
    render(<MultipleCustomHook />)
    const buttonSiguiente = screen.getByText('Siguiente')

    fireEvent.click(buttonSiguiente)

    expect(mockIncremen).toHaveBeenCalled()
    
    
  })


});