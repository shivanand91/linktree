import React from 'react'

const Navbar = () => {
  return (
      <nav className='flex justify-between items-center m-10 rounded-full bg-white p-4 text-black relative shadow-sm font-mono'>
          <div className='flex items-center space-x-14'>
              <h1 className='text-4xl font-bold'>LinkTree</h1>
              <ul className='flex space-x-8 font-semibold text-gray-500'>
                    <li>Templates</li>
                    <li>Marketplace</li>
                    <li>Discover</li>
                    <li>Pricing</li>
                    <li>Learn</li>
              </ul>
          </div>
      </nav>
  )
}

export default Navbar