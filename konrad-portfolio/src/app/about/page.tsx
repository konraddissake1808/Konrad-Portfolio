import React from 'react'

function About() {
  return (
    <div>
      <div>
        <div>
          <div id='about-photo-container' className='w-full h-72 flex justify-center items-center mb-10'>
            <div id='about-photo' className='w-4/5 h-full bg-contain bg-no-repeat bg-center'></div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-4/5 mb-10'>
              <p className='mb-4'>I am Konrad Dissake, a Fullstack Web Developer and Software Engineer from Douala, Cameroon.</p>
              <p>I am a self-taught developer with a passion for learning and building new things starting my coding journey since 2021.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='mb-10 flex flex-col items-center'>
            <p className='text-2xl'>I code with...</p>
          </div>
          <div className='h-64 flex flex-col items-center justify-center'>
            <div className='h-full w-full grid grid-cols-1 grid-rows-3'>
              <div className='col-start-1 row-start-1' id='frontend-container'></div>
              <div className='col-start-1 row-start-2' id='backend-container'></div>
              <div className='col-start-1 row-start-3' id='devops-container'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About