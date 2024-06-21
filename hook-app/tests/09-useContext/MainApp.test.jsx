import { fireEvent, render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <MainApp/>', () => {
  test('Debe de mostrar el HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )

    expect(screen.getByText('HomePage')).toBeTruthy()
  })
  test('Debe de mostrar el LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MainApp />
      </MemoryRouter>
    )
    const routeLogin = screen.getByText('Login')
    fireEvent.click(routeLogin)
    screen.debug()
    expect(screen.getByText('LoginPage')).toBeTruthy()
  })

})