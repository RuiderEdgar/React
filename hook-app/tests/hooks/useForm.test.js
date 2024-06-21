/* eslint-disable no-undef */
import { renderHook, act } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Edgar',
    email: 'edgar@gmail.com'
  }
  test('Debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    expect(result.current).toEqual({
      formState: initialForm,
      name: initialForm.name,
      email: initialForm.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  })

  test('Debe de cambiar el nombre del formulario', () => {
    //ejercicio
    const newValue = 'Luis'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange} = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
    })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('Debe de realizar el reset del formulario', () => {
    //ejercicio
    const newValue = 'Luis'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
      onResetForm()
    })

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
  })
})