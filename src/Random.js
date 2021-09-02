import React, {useState, useEffect} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;



const Random = () => {
    const [gif, setGif] = useState('');


    const fetchIt = async () => {
        // const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
        // const data = await response.json();
        // console.log(data)

        const {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
       
        const imgSrc = data.data.images.downsized_large.url;
        console.log(imgSrc)
        setGif(imgSrc)

    }

    useEffect(() => {
       

        fetchIt()
     }, [])

     const handleClick = () => {
        fetchIt()
     }

    return (
        <div className="gif-cont">
            
            <img src={gif} alt="" />
            <button onClick={handleClick}>Generate</button>
        </div>
    )
}

export default Random
