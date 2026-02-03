"use client"
import React from 'react'

function Contact() {
  return (
    <div>
      <div className='flex justify-center items-center h-[30vh]'>
        <h1 className='text-4xl'>Let's get in touch</h1>
      </div>
      <div className='flex justify-center glass text-white py-16 rounded-2xl h-[60vh]'>
        <form className='flex flex-col w-3/4 gap-3 text-white'
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
          <div className='mb-4 flex flex-col'>
            <label htmlFor="name">Name</label>
            <input className='contactInput' name="name" placeholder="Name" required />
          </div>
          <div className='mb-4 flex flex-col'>
            <label htmlFor="email">Email</label>
            <input className='contactInput' name="email" type="email" placeholder="Email" required />
          </div>
          
          <div className='mn-4 flex flex-col'>
            <label htmlFor="subject">Subject</label>
            <select className='contactInput' name="subject">
              <option className='subjectOption' value="Job opportunity">Job opportunity</option>
              <option className='subjectOption' value="Freelance project">Freelance project</option>
              <option className='subjectOption' value="General inquiry">General inquiry</option>
            </select>
          </div>

          <div className='mb-4 flex flex-col'>
            <label htmlFor="message">Message</label>
            <textarea className='contactInput' name="message" placeholder="Message" required />
          </div>

          {/* Honeypot */}
          <input name="honeypot" style={{ display: "none" }} />

          <div id='contactSendButton'>
            <button className='text-white' type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact