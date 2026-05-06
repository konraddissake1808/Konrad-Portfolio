'use client';
import React, { ReactElement, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import weatherAppImage from '../../../public/weather app desktop.png'

interface ProjectComponentProps {
  imageURL: StaticImageData;
  Title: string;
  projectDescription: string;
  TechStackIcons: StaticImageData|any;
  ProjectLinks: string|any;
}

function ProjectComponent({imageURL, Title, projectDescription, TechStackIcons, ProjectLinks }:ProjectComponentProps) {

    const [projectImageURL, setProjectImageURL] = useState(imageURL)
    const [projectTitle, setProjectTItle] = useState("")
    const [description, setDescription] = useState("")
    const [techStackIcons, setTechStackIcons] = useState(TechStackIcons)
    const [projectLink, setProjectLink] = useState("")
    
    useEffect(() => {
        setProjectImageURL(imageURL)
        setProjectTItle(Title)
        setDescription(projectDescription)
        setTechStackIcons(TechStackIcons)
        setProjectLink(ProjectLinks)
        console.log(techStackIcons)
        console.log(projectImageURL)
        console.log(projectDescription)
    }
    , [imageURL, Title, projectDescription])

  return (
    <div>
        <div className='flex justify-center min-h-[40vh]'>
          <div className='rounded-lg w-4/5 h-3/5 flex items-center justify-center project-component'>
            <a href={projectLink}>
              <div className='flex flex-col items-center  @5xl:flex-row @5xl:'>
                <div className='rounded-lg mb-4 @5xl:mb-0 @5xl:mr-6 @5xl:h-full @5xl:w-[40%]'>
                  <Image className='rounded-t-lg' src={projectImageURL} alt="" />
                </div>
                <div className='w-[90%] mb-6 @5xl:my-6 @5xl:w-[60%]'>
                  <div className='mb-4'>
                    <div className='mb-2 text-2xl font-space-grotesk font-semibold'>
                      <p>{projectTitle}</p>
                    </div>
                    <div className='text-lg'>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div>
                    
                    <div className='flex'>
                      {techStackIcons.map((icon: StaticImageData|any, index: number) => (
                        <div key={index} className='flex justify-center flex-row items-center'>
                          <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden'>
                            <Image className='text-black w-6 h-6' alt='' src={icon}></Image>
                          </div>
                          <div className='hidden'>
                            <p>Tech Stack Icon</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>  
          </div>
        </div>
    </div>
  )
}

export default ProjectComponent