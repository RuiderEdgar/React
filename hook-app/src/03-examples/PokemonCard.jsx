import React, { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({id, name, sprites = []}) => {

  const h2Ref = useRef()
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})
  useLayoutEffect(() => {
    const {height, width} = h2Ref.current.getBoundingClientRect();
    setBoxSize({height, width})
  }, [name])

  return (
    <>
      <section style={{height: 200, display:'flex'}}>
          <h2 ref={h2Ref} className='text-capitalize'>#{id} - {name}</h2>

          <div>
              {
                sprites.map( sprite => {
                  return <img key={sprite} src={sprite} alt={`Pokemon ${name}`} />
                  })
                  }
          </div>
      </section>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
