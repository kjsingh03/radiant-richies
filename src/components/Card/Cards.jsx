import React, { useEffect, useState } from 'react'
import Card from './Card';
import data from '../../data.json'  

function Cards() {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        setCardData(data.cardData)
    }, [])

  return (
    <div className="flex md:flex-row flex-col gap-4 py-2 ">
            {
                cardData?.map((card,index) => (
                    <Card card={card} index={index} key={index} />
                ))
            }
        </div>
  )
}

export default Cards
