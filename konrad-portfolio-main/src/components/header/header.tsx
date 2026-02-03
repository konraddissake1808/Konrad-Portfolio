'use client';
import React, { useEffect, useState } from 'react'
import MenuButton from './_components/menuButton';
import Link from 'next/link';


function Header() {

  useEffect(()=> {
    const navBar = document.getElementById('topNav');
    const mobileNavMenu = document.getElementById('nav')

    document.addEventListener('scroll', function() {
        if(window.scrollY > 10) {
            navBar?.classList.add('scrolled');
            mobileNavMenu?.classList.add('scrolled');
        } else {
            navBar?.classList.remove('scrolled');
            mobileNavMenu?.classList.remove('scrolled');
        }
    });
  })

  return (
    <div id='topNav' className='w-full h-full relative flex items-center duration-300'>  
      <div className=''>
        <nav id='nav' className="nav glass z-40 absolute right-0 top-0 flex justify-center items-center font-inter duration-300">
          <div className='z-50 h-full w-4/5 flex justify-between items-center flex-col'>
            <div id='nav-links' className='hidden opacity-0 text-center delay-200'>
              <div className='z-20 mb-4 mt-10 nav-link'>
                <Link id='home' href="/">Home</Link>
              </div>
              <div className='z-20 mb-4 nav-link'>
                <Link id='about' href="/about">About</Link>
              </div>
              <div id='work' className='z-20 mb-4 nav-link'>
                <Link href="/works">Works</Link>
              </div>
              <div id='contact' className='z-20 mb-8 nav-link'>
                <Link href="contact">Contacts</Link>
              </div>
            </div>
          </div> 
        </nav>
      </div>
      <div className='h-full w-full flex items-center relative z-30 duration-300'>
        <header className="h-full w-full flex items-center justify-between relative">
          <div id="logo" className="w-[20%] ml-5 pt-[6px]">
            <Link href="/" className='font-kufam font-normal text-[32px] leading-none'>KD</Link>
          </div>           
        </header>
      </div>
      <div className='h-full flex justify-center items-center w-1/5 z-[90]'>
        <MenuButton></MenuButton>
      </div>
    </div>
  )
}

export default Header