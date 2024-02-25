import React from 'react'
import search from '/src/assets/search.svg'

function Navbar() {
    return (
        <nav className="bg-[#212731] text-[#CACFD3] fixed w-full z-50 py-2 px-8 md:px-16 flex justify-center text-xs">
            <ul className="flex items-center justify-between w-full max-w-[40rem] list-none ">
                <li className="flex items-center gap-2 bg-white p-2 rounded-lg w-[60%] sm:w-[40%] ">
                    <div className="w-6 h-6 z-40">
                        <img src={search} className="w-full h-full object-cover" />
                    </div>
                    <input type="search" className="bg-transparent text-[#212731] outline-none w-[80%] sm:w-[90%]" />
                </li>
                <li className="sm:block hidden">Categories</li>
                <li className="sm:block hidden">Website Builders</li>
                <li>Today's Deals</li>
            </ul>
        </nav>
    )
}

export default Navbar
