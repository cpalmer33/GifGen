import React, {useState, useEffect} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;



const Tag = () => {
    const [gif, setGif] = useState('');
    const [tag, setTag] = useState('dogs')


    const fetchIt = async (tag) => {
        // const response = await fetch(`https://api.giphy.com/v1/gifs/Tag?api_key=${API_KEY}`)
        // const data = await response.json();
        // console.log(data)

        const {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`)
       
        const imgSrc = data.data.images.downsized_large.url;
        console.log(imgSrc)
        setGif(imgSrc)

    }

    useEffect(() => {
       

        fetchIt(tag)
     }, [])

     const handleClick = () => {
        fetchIt(tag)
     }

    return (
        <div>
           
            <img width="500" src={gif} alt="" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => handleClick(tag)}>Click for another!</button>
        </div>
    )
}

export default Tag
