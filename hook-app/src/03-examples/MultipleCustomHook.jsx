import { useCounter, useFetch } from "../hooks"
import { LoagingMessage } from "./LoagingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {

    // fetch("https://pokeapi.co/api/v2/pokemon/1");
    const {counter, decrement, increment} = useCounter(1)
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    const {id, name} = !isLoading && data
    return (
        <>
            <h1>Información de Pokemón</h1>
            <hr />

            {
                isLoading ? 
                <LoagingMessage/> : 
                <PokemonCard id={id} name={name} 
                sprites={[
                    data.sprites.front_default,
                    data.sprites.back_default,
                    data.sprites.front_shiny,
                    data.sprites.back_shiny,
                ]}/>
            }

            <h2>{data?.name}</h2>

            <button className="btn btn-primary mt-2" onClick={() => counter > 1 ? decrement() : null}>Anterior</button>
            <button className="btn btn-primary mt-2" onClick={() => increment()}>Siguiente</button>
            
        </>
    )
}
