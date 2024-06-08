/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en CounterApp', ()=>{

    const initialValue = 10

    test('Debe de hacer match con el snapshot', ()=>{
        const { container } = render(<CounterApp value={10} />);
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el valor inicial de 100', ()=> {
        render(<CounterApp value={100}/>)
        // expect(screen.getByText(value)).toBeTruthy();
        // expect(getByText(value).innerHTML).toContain(value);

        //*El metodo find retorna una promesa mientras que el metodo get no
        // screen.findByText(100).then(heading => {
        //     console.log(heading)
        //     expect(heading.innerHTML).toContain('100')
        // });
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100')        
    })

    test('debe de incrementar con el boton +1', ()=>{
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy()
    })
    test('debe de decrementar con el boton -1', ()=>{
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy()
    })
    test('Debe de funcionar el boton de reset', ()=>{
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText("+1"));
        // fireEvent.click(screen.getByText('Reset'))
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect(screen.getByText('10')).toBeTruthy()

    })
})