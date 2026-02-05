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
      <div className='flex justify-center min-h-[80vh]'>
        <div className='rounded-lg w-4/5 h-3/5 flex items-center justify-center glass'>
        <a href="https://weather-clae6i6kc-konrad-dissakes-projects.vercel.app/">
          <div className='flex flex-col items-center'>
            <div className='rounded-lg mb-4'>
              <Image className='rounded-t-lg' src={weatherAppImage} alt="" />
            </div>
            <div className='w-[90%] mb-6'>
              <div className='mb-4'>
                <div className='mb-2'>
                  <p>Weather Now</p>
                </div>
                <div>
                  <p>A weather app displaying weather data fetched from the openmeteo api</p>
                </div>
              </div>
              <div>
                <div className='flex'>
                  <div>
                    <div className='flex justify-center flex-col items-center'>
                      <div className='w-[24px] h-[24px] bg-black rounded-full flex items-center justify-center overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" className="bi bi-css" viewBox="0 0 16 16">
                          <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V0zM4.59 7.498q-.908 0-1.455.508-.547.507-.547 1.484v3.106q0 .986.527 1.484t1.406.498q.576 0 1.016-.224.45-.225.703-.674.255-.45.254-1.114v-.185h-1.22v.176q0 .449-.186.683t-.527.235q-.372-.01-.557-.264-.186-.255-.186-.752V9.686q0-.547.166-.811.177-.264.577-.264.321 0 .517.225.195.224.195.693v.205h1.23V9.52q0-.674-.243-1.124a1.55 1.55 0 0 0-.664-.673q-.42-.225-1.006-.225m4.214-.01q-.586 0-1.006.244a1.67 1.67 0 0 0-.635.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.304.42.967.732l.469.215q.44.186.625.43.186.244.186.635 0 .478-.166.703-.157.224-.528.224-.36 0-.547-.244-.185-.243-.205-.752H6.87q.02.996.498 1.524.479.527 1.387.527t1.416-.518.508-1.484q0-.81-.332-1.289-.333-.479-1.045-.79l-.45-.196q-.39-.166-.556-.381-.165-.214-.166-.576 0-.4.166-.596.175-.195.508-.195.36 0 .508.234.156.234.175.703h1.123q-.03-.976-.498-1.484-.468-.518-1.308-.518m4.057 0q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"/>
                        </svg>
                      </div>
                      <div className='hidden'>
                        <p>CSS</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-center flex-col items-center rounded-full'>
                      <div className='w-[24px] h-full overflow-hidden rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" className="bi bi-typescript" viewBox="0 0 16 16">
                          <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm-1.139 7.488q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518M7 7.596v1.113h1.3V14.5h1.221V8.709h1.289V7.596z"/>
                        </svg>
                      </div>
                      <div className='hidden'>
                        <p>Typescript</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-center flex-col items-center'>
                      <div className='w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" className='w-[48px] h-[48px] rounded-full'>
                          <path fill='#000000' d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
                        </svg>
                      </div>
                      <div className='hidden'>
                        <p>Next.js</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-center flex-col items-center'>
                      <div className='w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                          <path d="M22.105 7.553c-.224.448-.523.723-.914.838-.614.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293L6.7 8.714c.546-.425 4.031-.015 5.552 1.194C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658L22.105 7.553zM16.192 15.391c-.613.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293L1.7 15.714c.545-.427 4.032-.014 5.552 1.194C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658l-1.834-.789C16.881 15.001 16.583 15.275 16.192 15.391z"></path>
                        </svg>
                      </div>
                      <div className='hidden'>
                        <p>Tailwind CSS</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-center flex-col items-center'>
                      <div className='w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center overflow-hidden'>
                        <svg className='w-10 h-10' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Mongodb--Streamline-Simple-Icons" height="24" width="24">
                          <path d="M17.193 9.555c-1.264 -5.58 -4.252 -7.414 -4.573 -8.115 -0.28 -0.394 -0.53 -0.954 -0.735 -1.44 -0.036 0.495 -0.055 0.685 -0.523 1.184 -0.723 0.566 -4.438 3.682 -4.74 10.02 -0.282 5.912 4.27 9.435 4.888 9.884l0.07 0.05A73.49 73.49 0 0 1 11.91 24h0.481c0.114 -1.032 0.284 -2.056 0.51 -3.07 0.417 -0.296 0.604 -0.463 0.85 -0.693a11.342 11.342 0 0 0 3.639 -8.464c0.01 -0.814 -0.103 -1.662 -0.197 -2.218zm-5.336 8.195s0 -8.291 0.275 -8.29c0.213 0 0.49 10.695 0.49 10.695 -0.381 -0.045 -0.765 -1.76 -0.765 -2.405z" fill="#000000"></path>
                        </svg>
                      </div>
                      <div className='hidden'>
                        <p>MongoDB</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-center flex-col items-center'>
                      <div className='w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center overflow-hidden'>
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
                          <path fill="#000000" d="M63.984 17.184 127.964 128H0Zm0 0"/>
                        </svg>
                      </div>
                      <div className='hidden'>
                        <p>Vercel</p>
                      </div>
                    </div>
                  </div>
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

export default Works