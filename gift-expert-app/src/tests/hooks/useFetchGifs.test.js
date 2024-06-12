import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Pruebas en useFetchGifs", () => {
  test("Debe de iniciar el estado inicial", () => {
    const {result} = renderHook(() => useFetchGifs('One Punch'))
    const {images, isLoading} = result.current
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  });
  test("Debe de retornar u arreglo de imagenes y isLoading en false", async() => {
    const {result} = renderHook(() => useFetchGifs('One Punch'))

    //Espera a que lleguen las imagenes
    await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0)
    )

    const {images, isLoading} = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  });
});
