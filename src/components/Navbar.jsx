import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-yellow-300 h-20 flex justify-between items-center px-10'>
    <div>LOGO</div>
    <div className='flex gap-8 items-center'>
        <p>HOME</p>
        <p>FAVOURITE</p>
        <div className='bg-orange-400 text-white  w-10 h-10 rounded-full flex items-center justify-center'>A</div>
    </div>
</div>

  )
}

export default Navbar