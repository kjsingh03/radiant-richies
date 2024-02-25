import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#212731] text-[#b6bdc4] flex py-2 sm:py-12 justify-between sm:h-[25rem]">
      <div className="w-[40rem] mx-auto flex sm:flex-row flex-col py-3.5 justify-between px-10 sm:px-4">
        <div className="py-2">
          <h1 className="text-white text-xl py-4">Categories</h1>
          <ul className="list-none flex flex-col gap-3">
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className="py-2">
          <h1 className="text-white text-xl py-4">Categories</h1>
          <ul className="list-none flex flex-col gap-3">
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="h-full sm:flex justify-center items-center py-4">
          <p className="">United States <i className="fa-solid fa-chevron-down text-[#e1e4e6] text-xs "></i></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
