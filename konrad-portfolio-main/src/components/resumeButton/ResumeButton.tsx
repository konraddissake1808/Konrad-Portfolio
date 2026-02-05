import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import englishIcon from '../../../public/flag-us-gb.svg'
import frenchIcon from '../../../public/flag-for-flag-france-svgrepo-com.svg'

function ResumeButton() {

    const dropdownRef = useRef<HTMLDivElement>(null)

    const ResumeLanguagesDropdown = () => {
        dropdownRef.current?.classList.toggle('hidden')
    }

    function handleClickEn() {
        window.open('/KonradDissake.pdf', '_blank');
    }

    function handleClickFr() {
        window.open('/Konrad Dissake.pdf', '_blank');
    }

    useEffect(() => {
        document.addEventListener('click', function outsideMenuClick(e){
            const resumeButton = document.getElementById('resume-button');
            const resumeDropdown = dropdownRef.current;
            if(!resumeButton?.contains(e.target as HTMLElement)) {
                resumeDropdown?.classList.add('hidden');
            }
        })
    });

  return (
    <div className='relative'>
        <div id="resume-button" className="h-12 w-40 flex justify-center items-center rounded-xs" onClick={ResumeLanguagesDropdown}>
            <div className="flex items-center gap-2 mx-4">
                <p>View Resume</p>
                <div>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                    </svg>
                </div>
            </div>
        </div>
        <div ref={dropdownRef} className='hidden absolute right-0 top-[-86px] glass rounded-md'>
            <div className='py-2 px-4'>
                <button className='flex justify-center items-center' onClick={handleClickEn}>
                    <p className='mx-1'>English</p>
                    <div className='w-5 h-5 flex justify-center items-center'>
                        <Image alt='' src={englishIcon} />
                    </div>
                </button>
            </div>
            <div className='py-2 px-4'>
                <button className='flex justify-center items-center' onClick={handleClickFr}>
                    <p className='mx-1'>Français</p>
                    <div className='w-5 h-5'>
                        <Image alt='' src={frenchIcon} />
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ResumeButton