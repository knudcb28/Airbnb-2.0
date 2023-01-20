import React from 'react'

const loadMediumPictures = async () => {
    const res = await fetch("https://www.jsonkeeper.com/b/VHHT")
    const cardsData = res.json()

    return cardsData;
  }

export default loadMediumPictures