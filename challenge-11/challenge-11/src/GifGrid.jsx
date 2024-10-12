import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async () => {
    const gifsList = await getGifs(category);
    console.log(gifsList); 
    setGifs(gifsList);
  };

  useEffect(() => {
    fetchGifs();
  }, [category]);

  return (
    <div>
      <h3>{category}</h3>
      <div className="gif-grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
