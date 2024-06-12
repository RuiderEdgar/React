import { render, screen } from "@testing-library/react"
import { GifGrid } from "../components/GifGrid"

describe('Purebas en <GifGrid/>', () => {
    const category = 'Saitama'
    test('Debe de mostrar el loadiing inicialmente', () => {
        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('Debe de tener items cuando se cargan las imagenes useFetchGifs')
})