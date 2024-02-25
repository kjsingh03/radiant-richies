import React from 'react'
import Tiles from '../Tile/Tiles'
import Cards from '../Card/Cards'
import vector from '../../assets/vector.svg'

function Main() {
    return (
        <main className="w-[90%] lg:w-[55rem] mx-auto text-[#4B5665] pt-[3rem] py-4 flex flex-col gap-2">
            <div className="flex flex-col gap-4 py-10 text-[13px]">
                <h1 className='text-3xl text-[#2c384a] font-medium'>Best Website builders in the US</h1>
                <div className="flex sm:flex-row flex-col sm:items-center gap-4 justify-between py-2 border-t border-b border-t-[#d5d4d4] border-b-[#d5d4d4] ">
                    <div className='flex sm:flex-row flex-col sm:items-center gap-4'>
                        <p className='flex items-center gap-2'><i className="fa-regular fa-circle-check text-base"></i> Last Updated - February 22, 2020</p>
                        <p className='flex items-center gap-2'><i className="fa-solid fa-info border-2 border-[#4B5665] px-[0.3rem] py-0.5 text-[0.6rem] rounded-[50%]"></i> Advertising Disclosure</p>
                    </div>
                    <div className="">
                        <p>Top Relevant <i className="fa-solid fa-chevron-down text-xs"></i></p>
                    </div>
                </div>
                <ul className="grid sm:flex grid-cols-3 items-center gap-4 text-center sm:gap-9 md:gap-14 lg:gap-16 py-1 list-none">
                    <li className="">Tools</li>
                    <li className="">AWS Builder</li>
                    <li className="">Start Build</li>
                    <li className="">Build Supplies</li>
                    <li className="">Tooling</li>
                    <li className="">Blue Hosting</li>
                </ul>
                <ul className="flex items-center gap-5 list-none text-center w-full mx-auto justify-center sm:justify-normal">
                    <li className="">Home</li>
                    <li className=""><img src={vector} /></li>
                    <li className="hidden sm:block">Hosting for all</li>
                    <li className="hidden sm:block"><img src={vector} /></li>
                    <li className="hidden sm:block">Hosting</li>
                    <li className="block sm:hidden">...</li>
                    <li className="hidden sm:block"><img src={vector} /></li>
                    <li className="hidden sm:block">Hosting6</li>
                    <li className=""><img src={vector} /></li>
                    <li className="">Hosting5</li>
                </ul>
                <Tiles />
            </div>
            <div className="">
                <h1 className='text-3xl text-[#2c384a]'>Related deals you might like for</h1>
                <Cards />
            </div>
            <div className="w-full flex sm:flex-row flex-col mx-auto gap-4 items-center justify-between p-3">
                <h1 className='text-2xl text-[#5c6874] w-full mx-auto sm:mx-0 text-center sm:text-left sm:w-[50%] md:w-[40%]'>Sign up and get exclusive special deals</h1>
                <div className="flex items-center">
                    <input type="text" className="bg-transparent px-1 sm:px-4 py-2.5 text-sm outline-[#1b88f4]" />
                    <button className="text-[#f2f2f2] hover:text-white bg-[#1b88f4] w-full text-center text-xs py-3 px-2 sm:px-4 rounded-r-lg">Sign Up</button>
                </div>
            </div>
        </main>
    )
}

export default Main
