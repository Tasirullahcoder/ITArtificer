import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="bg-[#262626] text-gray-600 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold text-[#0c6793] mb-4">More About ITA</h2>
            <p className="text-lg text-[#6e6e6e]">
              IT Artificer Serving its Services all over the world, especially in
              Pakistan, America, England, Afghanistan, UAE, and India. We employ
              a skilled team of developers who are totally focused on delivering
              high-quality software solutions that enable our customers to
              achieve their critical IT objectives.
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold text-[#0c6793] mb-4">Menu</h2>
            <ul className="text-lg text-[#6e6e6e] space-y-2">
              <li>Our Products</li>
              <li>About us</li>
              <li>Our Blogs</li>
              <li>Apply for Job</li>
              <li>Subsidies</li>
              <li>Privacy Policy</li>
              <li>Point of Sale</li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold text-[#0c6793] mb-4">Services</h2>
            <ul className="text-lg text-[#6e6e6e] space-y-2">
              <li>Domain | Hosting</li>
              <li>Web Development</li>
              <li>Graphic Designing</li>
              <li>Digital Marketing</li>
              <li>Hajj Umra MIS</li>
              <li>ITA Academia</li>
              <li>E-Business</li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold text-[#0c6793] mb-4">Map</h2>
            <div className="w-[110%] h-60 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.635382144515!2d72.5228904149041!3d34.01220548053623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db7458ea856969%3A0x89a26d85e16a25c!2sIT%20Artificer!5e0!3m2!1sen!2s!4v1700784908658!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
        
      </div>
      
    </footer>
    <div className="mt-0 p-12   bg-[#343434] text-start border-t border-gray-700 pt-4 text-xl text-[#6e6e6e]">
    Copyright © IT Artificer. All rights reserved!
  </div>
  </>
  );
};

export default Footer;
