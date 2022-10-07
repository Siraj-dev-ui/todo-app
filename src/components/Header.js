import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full bg-[#374151] h-10 text-white'>
        <div className='text-xl font-bold flex justify-between mx-20 items-center h-full'>
            <span>Todo App With Axios</span>
            <span className='font-normal underline cursor-pointer'>
              <Link to='/user'>
              Add User
              </Link>
              </span>

        </div>
        
    </div>
  )
}

export default Header