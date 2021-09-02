import React, { useState } from 'react';

import {useGif} from './useGif';

const Tag = () => {
    const [tag, setTag] = useState('');
    const {gif, fetchIt} = useGif(tag);

    const clickHandler = () => {
        setTag('');
    }

    return (
        <div className="gif-cont">
            
            <img width="500" src={gif} alt="Random Gif" />
           <form>
               <div className="input-field">
                <input value={tag} onClick={clickHandler} className="form-field"  onChange={(e) => setTag(e.target.value)} />
                <label>Search...</label>
                <span></span>
               </div>
               <button onClick={() => fetchIt(tag)}>Generate</button>
           </form>
           
            
          
        </div>
    );
}

export default Tag;
