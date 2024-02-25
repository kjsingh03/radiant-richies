import React from 'react'
import logo from '../../assets/webLogo.png'


function Card({ card, index }) {
  return (
    <div className="flex flex-col gap-3 sm:p-4 w-full max-w-[25rem] mx-auto">
      <div className="w-full py-10">
        <div className="w-[10rem] h-[7rem] overflow-hidden  mx-auto">
          <img src={logo} className="w-full h-full object-fill" />
        </div>
      </div>
      <div className="text-[#074786] text-sm font-medium flex gap-5 px-2">
        <p className="">{card.discount}% off </p>
        <p className="">Limited Time</p>
      </div>
      <p className="w-full text-center font-bold">{card.imgName}</p>
      <p className="">{card.name}</p>
      <div className="flex gap-2 items-baseline">
        <p className="text-[#5c6874]">{(card.price * (1 - card.discount / 100)).toFixed(2)}</p>
        <p className="text-[#9fa9b3] text-xs">${card.price}</p>
        <p className="text-[#ef4c5d] text-xs">({card.discount}% off)</p>
      </div>
      <button className="text-[#f2f2f2] hover:text-white bg-[#1b88f4] w-full mx-auto text-center p-2 rounded-lg">View Deal</button>
    </div>
  )
}

export default Card
