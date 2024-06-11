import { render, screen } from "@testing-library/react";
import { GiftItem } from "../components/GiftItem"

describe('Pruebas en <GiftItem/>', ()=>{
    const title = "Pokemon";
    const url = "https://media2.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif?cid=89873216fptjum8d5q4prwg2n7cnqc461pldr3gm7jerfhch&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    test('Debe de evaluar el snapshot', () => { 
        const { container } = render(
          <GiftItem
            title={title}
            url={url}
          />
        );
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar la imagen con el /url y el ALT indicado', () => { 
        render(<GiftItem title={title} url={url} />);
        // expect(screen.getByRole("img").src).toBe(url);
        // expect(screen.getByRole("img").alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(title)
        
    })

    test('Debe de mostrar el titulo en el componente', () => { 
        render(<GiftItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy()

    })
})