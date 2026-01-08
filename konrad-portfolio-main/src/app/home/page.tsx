'use client';
import React from 'react'
import Link from "next/link";
import { useEffect, useState } from "react";

function Homepage() {

    const rolesArray = [
        "Fullstack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Mobile Developer",
        "UI/UX Designer",
    ]

   const [roles, setRoles] = useState(rolesArray[0]);

    let index = 0;
    useEffect(() => {
        setInterval(() => {
            setRoles(rolesArray[index]);
            index++;
            if (index >= rolesArray.length) {
                index = 0;
            }
        }, 3000);
        
    }, []);

  return (
    <div className='w-full h-[80vh]'>
        <div className="relative w-full h-full flex items-center justify-center">
            <div id="content" className="z-10 h-full w-full flex justify-center items-center">
            <div className="flex flex-col">
                <div className="mb-8">
                <div className="text-center">
                    <p id='firstAnimation' className="text-4xl mb-1 animated">Konrad Dissake</p>
                </div>
                <div>
                    <p id='secondAnimation' className="text-lg text-center animated duration-200">{roles}</p>
                </div>
                </div>
                <div id='thirdAnimation' className="flex justify-around animated">
                <div className="h-10 w-24 flex justify-center items-center glass rounded-sm">
                    <Link className="" href='/about'>About</Link>
                </div>
                <div id="home-works-button" className="h-10 w-24 flex justify-center items-center rounded-sm">
                    <Link className="" href='/works'>Works</Link>
                </div>
                </div>
            </div>
            </div>
        <div id="background-image" className="absolute z-0 h-full w-full top-0 bg-contain bg-no-repeat bg-center"></div>
      </div>
    </div>
  )
}

export default Homepage