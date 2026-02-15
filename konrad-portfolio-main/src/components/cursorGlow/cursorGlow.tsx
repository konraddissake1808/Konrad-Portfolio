'use client'
import React, { useEffect } from 'react'

function CursorGlow() {

    useEffect(() => {
        const elem = document.querySelector('.cursor-glow') as HTMLElement;

        document.addEventListener("mousemove", (event) => {
            let mousex = event.clientX + window.scrollX - 250;
            let mousey = event.clientY + window.scrollY - 250;
            if (elem) {
                elem.style.left = mousex + 'px';
                elem.style.top = mousey + 'px';
            }
        });

        document.addEventListener("scroll", () => {
            if (elem) {
                elem.classList.add('scrolling');
            }
        });

        let scrollTimeout: NodeJS.Timeout;
        document.addEventListener("scroll", () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (elem) {
                    elem.classList.remove('scrolling');
                }
            }, 300);
        });
    }, [])

  return (
    <div className="cursor-glow"></div>
  )
}

export default CursorGlow