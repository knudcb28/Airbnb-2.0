import React from 'react'

const loadSmallPictures = async () => {
    const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
    const data = await res.json();
    return data;
  }
  
export default loadSmallPictures