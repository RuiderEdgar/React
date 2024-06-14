import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({})
    useEffect(() => {
        const onMouseMove = ({x, y}) => {
            const coords = {x, y}
            console.log(coords)
            setCoords({x,y})
        }

        window.addEventListener('mousemove', onMouseMove)
        
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            
      }
    }, [])
    
  return (
    <>
        <h3>Usuario ya existe</h3>
        <h4>{JSON.stringify(coords)}</h4>
    </>
)
}
