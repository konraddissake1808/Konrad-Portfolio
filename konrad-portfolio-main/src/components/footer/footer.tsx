import React from 'react'

function Footer() {
  return (
    <footer className='border-t border-gray-700'>
      <div className='flex justify-between items-center px-4 py-12'>
        <div className='flex flex-col'>
          <h4 className='text-xl font-semibold'>Konrad Dissake</h4>
          <p className='text-gray-400'>Software Engineer</p>
        </div>
        <div className='flex flex-col gap-4 text-gray-400 text-right'>
          <a href='mailto:konrad.dissakengando@gmail.com' className='hover:text-white transition'>Prefer Email? Click here</a>
          <span>·</span>
          <a href='https://www.linkedin.com/in/konrad-dissake-ngando/' className='hover:text-white transition'>LinkedIn</a>
          <span>·</span>
          <a href='https://github.com/konraddissake1808' className='hover:text-white transition'>GitHub</a>
        </div>
      </div>
      <div className='border-t border-gray-700 px-8 py-6'>
        <p className='text-sm text-gray-500'>© 2026 Konrad Dissake. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer