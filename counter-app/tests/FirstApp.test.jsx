import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', ()=>{
    // test('debe de hacer match con el snapshot',()=>{
    //     const title = 'Hola, soy Goku'
    //     const {container }= render(<FirstApp title={title}/>)
    //     // console.log(container)
    //     expect(container).toMatchSnapshot()
    // })

    test('debe mostrar el titulo en un h1', () => {
        const title = "Hola, soy Goku";
        const { container, getByText, getByTestId} = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy()

        //El mismo espacio, el mismo texto
        // expect(getByTestId('test-title').innerHTML).toBe(title)

        //Debe de contener esa palabra
        expect(getByTestId('test-title').innerHTML).toContain(title)

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = "Hola, soy Goku";
        const subTitle = 123;
        //props
        const { getByText } = render(<FirstApp title={title} subTitle={subTitle}/>);
        expect(getByText(subTitle)).toBeTruthy();
        // expect(getAllByText(subTitle).length).toBe(2);
    })
})