import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementar = useCallback(
      (value) => {
        setCounter((c) =>  c + value);
      },
      [],
    )
    
    useEffect(() => {
        // incrementar();
    }, [incrementar])

    // const incrementar = () => {
    //     setCounter( counter + 1)
    // }
  return (
    <>
        <h1>CallbackHook: {counter}</h1>
        <hr />
        <ShowIncrement increment={incrementar}/>
    </>
  )
}
