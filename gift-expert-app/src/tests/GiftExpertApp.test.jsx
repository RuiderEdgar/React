import { fireEvent, render, screen } from "@testing-library/react"
import { GiftExpertApp } from "../GiftExpertApp"

describe('Pruebas en <GiftExpertApp/>', () => {
    test('deberia de tomar un snapshot del componente', () => { 
        render(<GiftExpertApp/>)
        expect(screen).toMatchSnapshot()
    })
    test('Debe de tener el titulo en un h1', () => {
        render(<GiftExpertApp />);
        const h1 = screen.getByRole("heading", {level: 1})
        expect(h1.innerHTML).toContain("GiftExpertApp");
    })

    test('Debe de mantener las misma cantidad de categorías cuando se pase una categoria ya mostrada', () => {
        render(<GiftExpertApp />);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: 'One punch'}})
        fireEvent.submit(form)
        
        screen.debug()
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2)
    })
})