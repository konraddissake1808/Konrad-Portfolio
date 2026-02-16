"use client"
import React from 'react'

function Contact() {
  return (
    <div className='@7xl:flex @7xl:items-center @7xl:justify-center'>
      <div className='flex flex-col justify-center items-center @5xl:flex-row @7xl:w-360'>
        <div className='w-3/4 h-[80vh] mb-36 @3xl:flex @3xl:flex-col @3xl:justify-around @3xl:items-start @5xl:flex-col @5xl:ml-20 @5xl:h-168.75  @5xl:mb-10 @5xl:justify-around'>
          <div className='flex flex-col justify-center items-center h-[60vh] @3xl:h-auto @3xl:items-center @5xl:h-auto'>
            <div className='flex flex-col justify-center items-center w-full @3xl:justify-start'>
              <h1 className='text-3xl font-semibold mb-8 text-left w-full font-space-grotesk'>Let's work together</h1>
              <p className='text-lg max-w-2xl mb-8 text-left w-full'>I'm available for freelance work, collaborations, and full-time opportunities. Send a message and I'll respond shortly.</p>
            </div>
          </div>
          <div className='w-full @5xl:mb-14'>
            <div className=''>
              <p className='text-2xl font-space-grotesk'>Email Me</p>
              <p>konrad.dissakengando@gmail.com</p>
            </div>
            <div className='mt-6'>
              <p className='text-2xl font-space-grotesk'>Address</p>
              <p>Douala, Cameroon</p>
          </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-[90%] text-white rounded-2xl mb-10 @3xl:w-4/5 @5xl:bg-black'>
          <form className='flex flex-col w-[85%] gap-3 text-white'
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = new FormData(form);

              await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(formData)),
              });

              form.reset();
            }}
          >
            <div className='mb-4 flex flex-col mt-14 @3xl:mb-8 @5xl:mb-6 @5xl:mt-10'>
              <label htmlFor="name">Name</label>
              <input className='contactInput' name="name" placeholder="Name" required />
            </div>
            <div className='mb-4 flex flex-col @3xl:mb-8 @5xl:mb-6'>
              <label htmlFor="email">Email</label>
              <input className='contactInput' name="email" type="email" placeholder="Email" required />
            </div>
            
            <div className='mb-4 flex flex-col @3xl:mb-8 @5xl:mb-6'>
              <label htmlFor="subject">Subject</label>
              <select className='contactInput pr-4' name="subject">
                <option className='subjectOption' value="Job opportunity">Job opportunity</option>
                <option className='subjectOption' value="Freelance project">Freelance project</option>
                <option className='subjectOption' value="General inquiry">General inquiry</option>
              </select>
            </div>

            <div className='mb-4 flex flex-col @3xl:mb-14 @5xl:mb-6'>
              <label htmlFor="message">Message</label>
              <textarea className='contactInput' name="message" placeholder="Message" required />
            </div>

            {/* Honeypot */}
            <input name="honeypot" style={{ display: "none" }} />

            <div id='contactSendButton' className='mb-8 @3xl:mb-4 @5xl:mb-2'>
              <button className='text-white cursor-pointer py-2 px-4' type="submit">Send</button>
            </div>
            <div className=''>
              <p className='text-sm text-gray-400 mb-4 text-center'>All inquiries are reviewed personally.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact