import React, { useEffect, useState } from 'react'
import Tile from './Tile';
import data from '../../data.json'

function Tiles() {

    const [tileData, setTileData] = useState([]);

    useEffect(() => {
        setTileData(data.tileData)
    }, [])

    return (
        <div className="flex flex-col gap-4 sm:gap-8 py-2 ">
            {
                tileData?.map((card,index) => (
                    <Tile card={card} index={index} key={index} />
                ))
            }
        </div>
    )
}

export default Tiles
