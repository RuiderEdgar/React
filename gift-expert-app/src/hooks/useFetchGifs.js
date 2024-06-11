import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
    // console.log(images)
    // getGift(category)
    //   .then(newGift => setImages(newGift))
  }, [ ])

  return {
    images,
    isLoading
  };
}
