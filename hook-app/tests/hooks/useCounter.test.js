/* eslint-disable no-undef */
import { act, render, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en useCounter', () => {
  const initial = 100;
  test('Debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    console.log(result)
    const { counter, increment, decrement, reset } = result.current

    expect(counter).toBe(10)
    expect(increment).toBeInstanceOf(Function)
    expect(decrement).toBeInstanceOf(Function)
    expect(reset).toBeInstanceOf(Function)
  })

  test('Debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100))  
    const { counter } = result.current

    expect(counter).toBe(100)
  })

  test('Debe de aumentar el contador', () => {
    const { result } = renderHook(() => useCounter(initial))
    const { increment } = result.current
    act(() => { 
      increment()
      increment(2)
    })
    expect(result.current.counter).toBeGreaterThan(initial)
    expect(result.current.counter).toBe(103)
  })

  test("Debe de disminuir el contador", () => {
    const { result } = renderHook(() => useCounter(initial));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });
    expect(result.current.counter).toBeLessThan(initial);
    expect(result.current.counter).toBe(97);
  });

  test("Debe de resetear el contador al valor inicial", () => {
    const { result } = renderHook(() => useCounter(initial));
    const { decrement, increment,reset } = result.current;
    act(() => {
      decrement();
      decrement(2);
      increment(5);
      reset()
    });
    expect(result.current.counter).toBe(100);
  });
  
})