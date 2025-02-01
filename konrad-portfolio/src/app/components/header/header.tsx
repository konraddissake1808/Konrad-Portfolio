'use client';
import React from 'react'
import dynamic from "next/dynamic";

const MenuButton = dynamic(() => import('./_components/menuButton'), {
  ssr: false,
});


function Header() {
  return (
    <div className='h-full w-full flex items-center'>
        <header className="h-full w-full flex items-center justify-between">
          <div id="logo" className="w-[20%] ml-5">
            <button className="font-kufam font-normal text-[32px] h-fit">
                <p className='font-kufam font-normal text-[32px] h-[40px]'>KD</p>
            </button>
          </div>
          <nav className="w[60%] hidden"></nav>
          <div className='w-1/5'>
            <MenuButton></MenuButton>
          </div>
        </header>
    </div>
  )
}

export default Header