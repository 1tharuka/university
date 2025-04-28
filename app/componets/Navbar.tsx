import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
        <Image src="/University-of-Vavuniya-Logo-1024x1024-removebg-preview (1) 1.png" alt='logo' width={200} height={200} />
    </div>
  )
}

export default Navbar