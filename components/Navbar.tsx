import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10' >
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/icons/logo.svg'
          width={32}
          height={32}
          alt='Gudia'
          className='max-sm:size-10'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Gudia</p>
      </Link>
      <div className='flex-between gap-5'>
        {/* Clerck - user Managment */}
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar