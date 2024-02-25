import React from 'react'
import logo from '../../assets/webLogo.png'

function Tile({ card, index }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 justify-between items-center relative w-full h-full min-h-[18rem] overflow-hidden">
      {
        index===0 && 
        <div className="text-white bg-[#ff7724] absolute top-0 left-0 rounded-r-xl py-1 px-2">
          <p className=""><i className=" fa-solid fa-trophy"></i> Best Choice</p>
        </div>
      }
      {
        index===1 && 
        <div className=" text-white bg-[#ff7724] absolute top-0 left-0 rounded-r-xl py-1 px-2">
          <p className=""><i className=" fa-solid fa-gem"></i> Best Value</p>
        </div>
      }
      <p className='h-full py-3'>{index + 1}</p>
      <div className=" flex flex-col items-center gap-4">
        <div className="w-[10rem] h-[7rem] overflow-hidden">
          <img src={logo} className="w-full h-full object-fill" />
        </div>
        <p className="w-full ">{card.imgName}</p>
      </div>
      <div className="w-full flex flex-col gap-2 sm:gap-3 sm:w-[50%] px-1">
        <p className=""><span className="font-bold text-[#2c384a]">{card.name}-</span> {card.description}</p>
        <p className="font-bold text-[#2c384a]">Main highlights</p>
        {
          card.highlights.content && 
          <p className="px-2">[What You Get]: {card.highlights.content}</p>
        }
        {
          card.highlights.main && 
          card.highlights.main?.map((elem,index)=>(
            <div className="flex items-center gap-1 px-3" key={index}>
            <p className="px-2 text-[#1981e8]">{elem.no}</p>
            <p className="px-2">{elem.name}</p>
            </div>
          ))
        }
        {
          card.highlights.features && 
            <p className="text-[2c384a]">Why we love it</p>
        }
        {
          card.highlights.features && 
          card.highlights.features.map((elem,index)=>(
            <p className="" key={index}><i className="fa-solid fa-check text-xs text-[#0855a1] "></i> {elem}</p>
          ))
        }

        <p className="text-[#1981e8] flex items-center gap-1 cursor-pointer "><span className='hover:underline'>Show more</span><i className="fa-solid fa-chevron-down text-[0.65rem] pt-1"></i></p>
      </div>
      <div className="flex gap-10 sm:flex-col items-center sm:min-h-[18rem] justify-between py-4 md:p-4 w-full sm:w-[20%]">
        <div className="flex sm:flex-col items-center gap-4 sm:gap-2 px-4 sm:px-0 text-center">
          <p className="font-semibold text-[#074786] text-3xl">{card.stars}</p>
          <p className="font-mediu text-sm text-[#074786]">{card.rating}</p>
        </div>
        <button className="text-[#f2f2f2] hover:text-white bg-[#1b88f4] w-full max-w-[5rem] sm:max-w-full text-center p-1 sm:p-2 rounded-lg">View</button>
      </div>
    </div>
  )
}

export default Tile
