/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en <LoginPage/>", () => {
  test("Debe de mostar el componente sin el usuario", () => {
    //para el contexto se mete el componente context
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });
  //tarea
  test("Debe de mostar el componente CON el usuario", () => {
    const user = {
      id: 123,
      name: "John Doe",
      email: "john@example.com",
    };
    //para el contexto se mete el componente context
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.email);
  });

  test('Debe de llamar a la funcion setUser al dar click', () => {
    const setUserMock = jest.fn()
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonEstablecer = screen.getByText("Establecer usuario");

    screen.debug()
    fireEvent.click(buttonEstablecer)
    screen.debug()

    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "Edgar",
      email: "ed@gmail.com",
    });
  })
});