/* eslint-disable no-undef */
import { renderHook } from "@testing-library/react"
import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Purebas sobre todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'Tarea 1',
    done: false
  }];

  test('Debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    
    expect(newState).toEqual(initialState)

  })

  test('Debe de agregar un todo', () => {
    const action = {
      type: "Add Todo",
      payload: {
      id: new Date().getTime(),
      description: "Conseguir piedra del alma",
      done: false,
      }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('Debe de eliminar un TODO', () => {
    const action = {
      type: "Remove Todo",
      payload: 1
    }

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0)
  })
  
  test('Debe de realizar el Toggle del todo', () => {
    const action = {
      type: "Toggle Todo",
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  })

})