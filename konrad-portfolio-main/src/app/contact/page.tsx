"use client"
import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-col justify-center items-center h-[50vh]'>
        <div className='flex flex-col justify-center items-center w-4/5'>
          <h1 className='text-3xl font-semibold mb-8 text-left w-full'>Let's work together</h1>
          <p className='text-lg max-w-2xl mb-8 text-left w-full'>I'm available for freelance work, collaborations, and full-time opportunities. Send a message and I'll respond shortly.</p>
        </div>
      </div>
      <div className='flex justify-center glass text-white rounded-2xl mb-10'>
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
          <div className='mb-4 flex flex-col mt-14'>
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

          <div id='contactSendButton' className='mb-8'>
            <button className='text-white' type="submit">Send</button>
          </div>
          <div className=''>
            <p className='text-sm text-gray-400 mb-4 text-center'>All inquiries are reviewed personally.</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact