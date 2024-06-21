import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en el componente <HomePage/>', () => {
  test('Debe de mostar el componente sin el usuario', () => {
    //para el contexto se mete el componente context
    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('null')
  })
  //tarea
  test('Debe de mostar el componente CON el usuario', () => {
    const user = {
      id: 123,
      name: "John Doe",
      email: "john@example.com",
    }
    //para el contexto se mete el componente context
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toContain(user.id.toString())
    expect(preTag.innerHTML).toContain(user.name)
    expect(preTag.innerHTML).toContain(user.email)
  })
})