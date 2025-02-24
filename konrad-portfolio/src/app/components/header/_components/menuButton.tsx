'use client'
import React, { useEffect, useState } from 'react'

function MenuButton() {
    const [openMenu, setOpenMenu] = useState(false);

    function buttonClick() {
        const hamMenu = document.getElementById('ham1');
        const nav = document.getElementById('nav');
        const navLinks = document.getElementById('nav-links');
        if(openMenu == false){
            setOpenMenu(true);
            hamMenu?.classList.add('active');
            nav?.classList.add('open-nav');
            navLinks?.classList.remove('hidden');
            navLinks?.classList.remove('opacity-0');
        } else if(openMenu == true) {
            setOpenMenu(false);
            hamMenu?.classList.remove('active');
            nav?.classList.remove('open-nav');
            navLinks?.classList.add('hidden');
            navLinks?.classList.add('opacity-0');
        }
    }
    
    useEffect(()=>{
        document.addEventListener('click', function outsideNavClick(e) {
            const hamMenu = document.getElementById('ham1');
            const nav = document.getElementById('nav');
            const navLinks = document.getElementById('nav-links');
            if (!nav?.contains(e.target as HTMLElement) && !hamMenu?.contains(e.target as HTMLElement)) {
                if(openMenu == true) {
                    setOpenMenu(false);
                    hamMenu?.classList.remove('active');
                    nav?.classList.remove('open-nav');
                    navLinks?.classList.add('hidden');
                    navLinks?.classList.add('opacity-0');
                }
            }
        })
    })

  return (
    <div className='flex items-center justify-center'>
        <svg className="ham hamRotate ham1 w-12" id='ham1' onClick={buttonClick} viewBox="0 0 100 100">
            <path
        className="line top"
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
            <path
        className="line middle"
        d="m 30,50 h 40" />
            <path
        className="line bottom"
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>
    </div>
  )
}

export default MenuButton