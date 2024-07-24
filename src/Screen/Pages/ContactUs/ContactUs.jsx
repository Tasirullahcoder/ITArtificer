import React,{ useState } from 'react'

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission logic here
    console.log('Form submitted:', { fullName, email, contactNumber });
  };
  return (
    <>
    <div>
      <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Contact us</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Business Hour: Monday - Saturday: 09 am to 6 pm
          </li>
          <li className="mb-2">
            Address: PTCL Training Center Peshawar Board, Pakistan
          </li>
          <li className="mb-2">
            E-mail: <a href="mailto:info@itartificer.com" className="underline">info@itartificer.com</a>
          </li>
          <li className="mb-2">
            Telephone: <a href="tel:+92-333-9296314" className="underline">+92-333-9296314</a>
          </li>
          <li>Skype us: itartificer</li>
        </ul>
      </div>
      <div className="w-1/2 p-4">
        <div className="mb-4">
          <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md px-3 py-2" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2">
            Search
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">IT Solution Services</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">Domain | Hosting</li>
          <li className="mb-2">Digital Marketing</li>
          <li>Web Development</li>
        </ul>
        <div className="absolute bottom-4 right-4">
          <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            <i className="fas fa-phone-alt"></i>
          </a>
        </div>
      </div>
    </div>
    </div>
     {/* next content */}
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="fullName" className="text-lg font-medium">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg font-medium">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="contactNumber" className="text-lg font-medium">
          Contact Number *
        </label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </form>

    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Technology Updates</h2>
      <ul className="list-disc ml-8">
        <li className="mb-2">
          Custom Point of Sale Software for Businesses
          <span className="text-gray-500">April 7, 2023</span>
        </li>
        <li className="mb-2">
          12 TIPS FOR WRITING EFFECTIVE EMAILS
          <span className="text-gray-500">June 5, 2021</span>
        </li>
        <li className="mb-2">
          American IT Company Proposed Tech City in KP
          <span className="text-gray-500">March 5, 2021</span>
        </li>
        <li className="mb-2">
          Digital Productivity Tools for Startups
          <span className="text-gray-500">February 28, 2021</span>
        </li>
      </ul>
    </div>
  </div>
  </>
  )
}

export default ContactUs
