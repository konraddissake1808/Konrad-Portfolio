"use client"
import React from 'react'

function Contact() {
  return (
    <div>
      <div className='flex justify-center items-center h-[50vh]'>
        <h1 className='text-4xl'>Let's get in touch</h1>
      </div>
      <div className='flex justify-center'>
        <form className='flex flex-col w-3/4 gap-3 text-black'
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
          <input name="name" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />

          <select name="subject">
            <option value="Job opportunity">Job opportunity</option>
            <option value="Freelance project">Freelance project</option>
            <option value="General inquiry">General inquiry</option>
          </select>

          <textarea name="message" placeholder="Message" required />

          {/* Honeypot */}
          <input name="honeypot" style={{ display: "none" }} />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact