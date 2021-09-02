import React, {useState, useEffect} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`



export const useGif = (tag) => {
    const [gif, setGif] = useState('');
    


    const fetchIt = async (tag) => {
        // const response = await fetch(`https://api.giphy.com/v1/gifs/Tag?api_key=${API_KEY}`)
        // const data = await response.json();
        // console.log(data)

        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url)
       
        const imgSrc = data.data.images.downsized_large.url;
        console.log(imgSrc)
        setGif(imgSrc)

    }

    useEffect(() => {
       

        fetchIt(tag)
     }, [])

  

     return {gif, fetchIt}


}


