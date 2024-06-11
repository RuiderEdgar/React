import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
// import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One punch', 'Dragon ball'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
        //Tarea agregar una nueva categoría
        // const newCategory = 'Hyundai'
        // setCategories([newCategory, ...categories])
    }
  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
            // setCategories={setCategories}
            onNewCategory={ onAddCategory}
        />


        {
            categories.map((category) => (
                <GifGrid key={category} category={category}/>
            ))
        }
        
    </>
  )
}
