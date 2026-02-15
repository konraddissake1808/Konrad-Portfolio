'use client';
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
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

  /*useEffect(() => {
    const homeLink = document.getElementById('home');
    const aboutLink = document.getElementById('about');
    const workLink = document.getElementById('work');
    const contactLink = document.getElementById('contact');

    function homeActive() {
      homeLink?.classList.add('active-link');
      aboutLink?.classList.remove('active-link');
      workLink?.classList.remove('active-link');
      contactLink?.classList.remove('active-link');
    }

    function aboutActive() {
      aboutLink?.classList.add('active-link');
      homeLink?.classList.remove('active-link');
      workLink?.classList.remove('active-link');
      contactLink?.classList.remove('active-link');
    }

    function worksActive() {
      workLink?.classList.add('active-link');
      homeLink?.classList.remove('active-link');
      aboutLink?.classList.remove('active-link');
      contactLink?.classList.remove('active-link');
    }

    function contactActive() {
      contactLink?.classList.add('active-link');
      homeLink?.classList.remove('active-link');  
      aboutLink?.classList.remove('active-link');
      workLink?.classList.remove('active-link');
    }

    document.addEventListener('click', (e) => {
      if(e.target === homeLink) {
        homeActive()
      } else if(e.target === aboutLink) {
        aboutActive()
      } else if(e.target === workLink) {
        worksActive()
      } else if(e.target === contactLink) {
        contactActive()
      }
    })
  }, [])*/

  

  const pathname = usePathname();

  useEffect(() => {
    const homeLink = document.getElementById('home');
    const aboutLink = document.getElementById('about');
    const workLink = document.getElementById('work');
    const contactLink = document.getElementById('contact');
    function homeActive() {
      homeLink?.classList.add('active-link');
      aboutLink?.classList.remove('active-link');
      workLink?.classList.remove('active-link');
      contactLink?.classList.remove('active-link');
    }

    function aboutActive() {
      aboutLink?.classList.add('active-link');
      homeLink?.classList.remove('active-link');
      workLink?.classList.remove('active-link');
      contactLink?.classList.remove('active-link');
    }

    function worksActive() {
      workLink?.classList.add('active-link');
      homeLink?.classList.remove('active-link');
      aboutLink?.classList.remove('active-link');
      contactLink?.classList.remove('active-link');
    }

    function contactActive() {
      contactLink?.classList.add('active-link');
      homeLink?.classList.remove('active-link');  
      aboutLink?.classList.remove('active-link');
      workLink?.classList.remove('active-link');
    }

    if (pathname === '/') {
      homeActive();
    } else if (pathname === '/about') {
      aboutActive();
    } else if (pathname === '/works') {
      worksActive();
    } else if (pathname === '/contact') {
      contactActive();
    }
  }, [pathname]);


  return (
    <div id='topNav' className='w-full h-full relative flex items-center duration-300 @container @5xl:justify-between'>     
      <div className='h-full w-full flex items-center relative z-30 duration-300 @5xl:w-1/2'>
        <header className="h-full w-full flex items-center justify-between relative">
          <div id="logo" className="w-[20%] ml-5 pt-1.5 @3xl:ml-9">
            <Link href="/" className='font-kufam font-normal text-[32px] leading-none'>KD</Link>
          </div>           
        </header>
      </div>
      <div className='h-full flex justify-center items-center w-1/5 z-90 @5xl:hidden'>
        <MenuButton></MenuButton>
      </div>
      <div className='overflow-hidden @5xl:w-1/2 @5xl:h-full'>
        <div className='overflow-hidden @5xl:full @5xl:h-full'>
          <nav id='nav' className="nav z-40 absolute right-0 top-0 flex justify-center items-center font-inter duration-300 @5xl:w-full @5xl:h-full @5xl:">
            <div className='z-50 h-full w-4/5 flex justify-between items-center flex-col @5xl:justify-center @5xl:items-end'>
              <div id='nav-links' className='hidden opacity-0 text-center delay-200 @5xl:flex @5xl:opacity-100'>
                <div className='z-20 mb-4 mt-10 nav-link active-link'>
                  <Link className='nav-link-content active-link' id='home' href="/">Home</Link>
                </div>
                <div className='z-20 mb-4 nav-link'>
                  <Link className='nav-link-content' id='about' href="/about">About</Link>
                </div>
                <div className='z-20 mb-4 nav-link'>
                  <Link className='nav-link-content' id='work' href="/works">Works</Link>
                </div>
                <div className='z-20 mb-8 nav-link'>
                  <Link className='nav-link-content' id='contact' href="contact">Contacts</Link>
                </div>
              </div>
            </div> 
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header