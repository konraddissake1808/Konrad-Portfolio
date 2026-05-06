import React from 'react'
import Image from 'next/image'
import weatherAppImage from '../../../public/weather app desktop.png'
import ProjectComponent from '@/components/projectComponent/ProjectComponent'
import NextJSSVG from '../../../public/logos/icons8-nextjs.svg'
import CSS from '../../../public/logos/css-brands-solid-full.svg'
import TypescriptLogo from '../../../public/logos/typescript-brands-solid-full.svg'
import TailwindCSSLogo from '../../../public/logos/tailwind-css-brands-solid-full.svg'
import MongoDBLogo from '../../../public/logos/mongodb-icon.svg'
import VercelLogo from '../../../public/logos/vercel-icon-svgrepo-com.svg'
import graphterImage from '../../../public/graphter screenshot.png'
import PythonLogo from '../../../public/logos/icons8-python.svg'
import FastApiLogo from '../../../public/logos/fastapi.svg'

function Works() {

  const projects = [
    {
      imageURL: weatherAppImage,
      Title: 'Weather Now',
      ProjectDescription: 'A weather app displaying weather data fetched from the openmeteo api',
      TechStackIcons: [CSS, TypescriptLogo, NextJSSVG, TailwindCSSLogo, MongoDBLogo, VercelLogo],
      ProjectLink: 'https://weather-clae6i6kc-konrad-dissakes-projects.vercel.app/'
    },
    {
      imageURL: graphterImage,
      Title: 'Graphter.ai (Beta)',
      ProjectDescription: 'A web app for font and color identification from images',
      TechStackIcons: [TypescriptLogo, NextJSSVG, TailwindCSSLogo, MongoDBLogo, VercelLogo, PythonLogo, FastApiLogo],
      ProjectLink: 'https://graphter-ai.vercel.app/'
    }
  ]

  return (
    <div className='@container mb-12 @7xl:flex @7xl:items-center @7xl:justify-center'>
      <div className='@7xl:w-360'>
        <div className='h-[80vh] w-full flex flex-col items-center justify-center mb-24'>
          <div className='flex flex-col items-center justify-center mb-10 h-full'>
            <div>
              <h1 className='text-5xl font-semibold font-space-grotesk'>Works</h1>
            </div>
            <div className='flex flex-col items-center justify-center mt-4'>
              <div className='w-4/5 text-center'>
                <p>In this section are some of my projects.</p>
              </div>
            </div>
          </div>   
        </div>
        <div>
          <div>
            <ProjectComponent imageURL={projects[0].imageURL} ProjectLinks={projects[0].ProjectLink} Title={projects[0].Title} projectDescription={projects[0].ProjectDescription} TechStackIcons={projects[0].TechStackIcons}></ProjectComponent>
          </div>
          <div>
            <ProjectComponent imageURL={projects[1].imageURL} ProjectLinks={projects[1].ProjectLink} Title={projects[1].Title} projectDescription={projects[1].ProjectDescription} TechStackIcons={projects[1].TechStackIcons}></ProjectComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works