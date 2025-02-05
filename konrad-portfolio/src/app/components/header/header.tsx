'use client';
import React from 'react'
import MenuButton from './_components/menuButton';
import Link from 'next/link';


function Header() {
  return (
    <div className='h-full w-full flex items-center'>
        <header className="h-full w-full flex items-center justify-between relative">
          <div id="logo" className="w-[20%] ml-5">
            <button className="font-kufam font-normal text-[32px] h-fit">
                <p className='font-kufam font-normal text-[32px] h-[40px]'>KD</p>
            </button>
          </div>
          <nav className="nav z-20 absolute right-0 top-0 flex justify-center items-center glass font-inter bg-slate-400 duration-300" id='nav'>
            <div className='z-10 h-full w-4/5 flex justify-between items-center flex-col'>
              <div id='nav-links' className='hidden opacity-0 text-center delay-200'>
                <div className='z-20 mb-4 mt-10 nav-link'>
                  <Link href="#">Home</Link>
                </div>
                <div className='z-20 mb-4 nav-link'>
                  <Link href="#">About</Link>
                </div>
                <div className='z-20 mb-4 nav-link'>
                  <Link href="#">Works</Link>
                </div>
                <div className='z-20 mb-8 nav-link'>
                  <Link href="#">Contacts</Link>
                </div>
              </div>
            </div> 
          </nav>
          <div className='w-1/5 z-50'>
            <MenuButton></MenuButton>
          </div>
        </header>
    </div>
  )
}

export default Header