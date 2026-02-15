'use client';
import React from 'react'
import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";

function Homepage() {

    const jobData = [
        {
        title: "FULLSTACK DEVELOPER",
        description: "Building scalable applications with modern web technologies."
        },
        {
        title: "FRONTEND ENGINEER", 
        description: "Creating beautiful, responsive user interfaces with React & Next.js."
        },
        {
        title: "BACKEND ARCHITECT",
        description: "Designing robust APIs and database systems for high-performance apps."
        },
        {
        title: "UI/UX DEVELOPER",
        description: "Crafting intuitive user experiences with pixel-perfect implementation."
        },
        {
        title: "DEVOPS ENGINEER",
        description: "Automating deployment pipelines and cloud infrastructure management."
        },
        {
        title: "MOBILE DEVELOPER",
        description: "Building cross-platform mobile apps with React Native and Flutter."
        }
    ];

    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const [titleText, setTitleText] = useState('');
    const [subtitleText, setSubtitleText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const [cursorVisible, setCursorVisible] = useState(true);
    const intervalsRef = useRef<NodeJS.Timeout[]>([]);

    // Cleanup all intervals
    const clearAllIntervals = useCallback(() => {
      intervalsRef.current.forEach(interval => clearInterval(interval));
      intervalsRef.current = [];
    }, []);

    // Type a string character by character
    function typeString(elementId: string, text: string, speed: number, onComplete: () => void) {
      let index = 0;
      const element = document.getElementById(elementId);
      if (!element) return;

      element.innerHTML = '';
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
        } else {
          clearInterval(typeInterval);
          intervalsRef.current = intervalsRef.current.filter(id => id !== typeInterval);
          onComplete();
        }
      }, speed);
      intervalsRef.current.push(typeInterval);
    }

    // Delete a string character by character
    function deleteString(elementId: string, speed: number, onComplete: () => void) {
      const element = document.getElementById(elementId);
      if (!element) return;

      const text = element.innerHTML;
      let index = text.length;

      const deleteInterval = setInterval(() => {
        if (index > 0) {
          element.innerHTML = text.substring(0, index - 1);
          index--;
        } else {
          clearInterval(deleteInterval);
          intervalsRef.current = intervalsRef.current.filter(id => id !== deleteInterval);
          onComplete();
        }
      }, speed);
      intervalsRef.current.push(deleteInterval);
    }

    // Main cycle: type title -> type description -> delete description -> delete title -> next job
    function startCycle() {
      const currentJob = jobData[currentJobIndex];

      // Type title
      typeString('title', currentJob.title, 100, () => {
        // After title typed, type description
        const timeout1 = setTimeout(() => {
          typeString('titleDescription', currentJob.description, 50, () => {
            // After description typed, wait then start deleting
            const timeout2 = setTimeout(() => {
              deleteString('titleDescription', 50, () => {
                // After description deleted, delete title
                const timeout3 = setTimeout(() => {
                  deleteString('title', 50, () => {
                    // After title deleted, move to next job and restart cycle
                    setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobData.length);
                  });
                }, 500);
                intervalsRef.current.push(timeout3);
              });
            }, 4000);
            intervalsRef.current.push(timeout2);
          });
        }, 500);
        intervalsRef.current.push(timeout1);
      });
    }

    useEffect(() => {
      startCycle();
      return () => {
        clearAllIntervals();
      };
    }, [currentJobIndex, clearAllIntervals]);

    useEffect(() => {
      const homeAboutButton = document.getElementById('home-about-button');
      const homeWorksButton = document.getElementById('home-works-button');
      const homeLink = document.getElementById('home');
      const aboutLink = document.getElementById('about');
      const workLink = document.getElementById('work');
      const contactLink = document.getElementById('contact');

      onload = () => {
        if (homeAboutButton) {
          homeAboutButton.classList.add('home-about-button') ;
        }
        if (homeWorksButton) {
          homeWorksButton.classList.add('home-works-button');
        }
      }
      document.addEventListener('click', (e) => {
        if(e.target === homeAboutButton) {
          aboutLink?.classList.add('active-link');
          homeLink?.classList.remove('active-link');
          workLink?.classList.remove('active-link');
          contactLink?.classList.remove('active-link');
        } else if(e.target === homeWorksButton) {
          workLink?.classList.add('active-link');
          homeLink?.classList.remove('active-link');
          aboutLink?.classList.remove('active-link');
          contactLink?.classList.remove('active-link');
        }
      })
    }, []);



  return (
    <div className='w-full h-[80vh] @container @6xl:h-[90vh]'>
      <div className="relative w-full h-full flex items-center justify-center">
        <div id="content" className="z-10 h-full w-full flex justify-center items-center @5xl:justify-start @5xl:pl-40 @6xl:pl-52">
          <div className="flex flex-col">
            <div className="mb-8 flex flex-col items-center justify-center @3xl:items-center @5xl:items-start">
              <div className="text-center mb-4">
                <p id='firstAnimation' className="text-4xl mb-1 animated @3xl:text-5xl">Konrad Dissake</p>
              </div>
              <div className='w-64'>
                <div id='secondAnimation' className="subtitle-container text-center animated mb-4 h-6 @5xl:text-justify">
                  <p id='title' className='text-lg @3xl:text-xl'></p>
                </div>
                <div id='thirdAnimation' className="description animated mb-6 h-20">
                  <div className="description-container text-center @5xl:text-justify">
                    <div className="description">
                      <p id='titleDescription' className='text-base @3xl:text-lg'>{descriptionText}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id='thirdAnimation' className="flex justify-around fade-in @5xl:w-full">
                <div className="h-10 mr-6 w-24 flex justify-center items-center rounded-xs">
                  <Link id='home-about-button' className="px-7 py-2" href='/about'>About</Link>
                </div>
                <div className="h-10 w-24 flex justify-center items-center rounded-xs">
                  <Link id="home-works-button" className="px-7 py-2" href='/works'>Works</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="" className="background-image absolute z-0 h-full w-full top-0 bg-contain bg-no-repeat bg-center @5xl:bg-right @6xl:right-28 @6xl:h-[80vh]"></div>
      </div>
    </div>
  )
}

export default Homepage