import React from 'react'
import Image from 'next/image'
import weatherAppImage from '../../../public/weather app desktop.png'

function Works() {
  return (
    <div className='mb-12'>
      <div className='h-[80vh] w-full flex flex-col items-center justify-center mb-24'>
        <div className='flex flex-col items-center justify-center mb-10 h-full'>
          <div>
            <h1 className='text-5xl'>Works</h1>
          </div>
          <div className='flex flex-col items-center justify-center mt-4'>
            <div className='w-4/5 text-center'>
              <p>In this section are some of my projects.</p>
            </div>
          </div>
        </div>   
      </div>
      <div className='flex justify-center'>
        <div className='rounded-lg w-4/5 h-3/5 border border-gray-300 flex items-center justify-center'>
          <div>
            <div className='rounded-lg'>
              <Image className='rounded-t-lg' src={weatherAppImage} alt="" />
            </div>
            <div className='glass'>
              <div>
                <div>
                  <p>Weather Now</p>
                </div>
                <div>
                  <p>A weather app displaying weather data fetched from the openmeteo api</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works