import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-gray-400 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8 text-black'>iTask</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all text-black'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all text-black'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar