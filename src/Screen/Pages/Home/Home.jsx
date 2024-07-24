import React from "react";
import RecentPost from "../../Components/home/RecentPost";


import { FaLaptop, FaRegComment, FaCog, FaWrench } from "react-icons/fa";
import { FaMobileAlt, FaChartLine, FaGraduationCap } from 'react-icons/fa';
import { Link } from "react-router-dom";
import TestimonialCarousel from "../../Components/home/TestimonialCarousel";
import PartnerCarousel from "../../Components/home/PartnerCarousel";


const Home = () => {
  return (
    <>
      <div className="bg-[url('assets/images/SoftwareHousePeshawarPng.png')] relative m-[0_0_80px_0] flex p-[775px_0_51px_0] w-[1920px] h-[840px] box-sizing-border">
        <div className="bg-[var(--itartificer-com-black-45,rgba(0,0,0,0.45))] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]"></div>
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center box-sizing-border">
          <div className="m-[0_40.8px_10px_40.8px] flex box-sizing-border">
            <span className="shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] break-words font-['Open_Sans'] font-[var(--itartificer-com-open-sans-regular-50-font-weight,400)] text-[50px] tracking-[var(--itartificer-com-open-sans-regular-50-letter-spacing,1px)] leading-[var(--itartificer-com-open-sans-regular-50-line-height,1.2)] text-[var(--itartificer-com-nero,#FFFFFF)]">
              Best software company Peshawar
            </span>
          </div>
          <div className="m-[0_0_24.5px_0] flex box-sizing-border">
            <span className="break-words font-['Open_Sans'] font-[var(--itartificer-com-open-sans-regular-152-font-weight,400)] text-[15px] leading-[var(--itartificer-com-open-sans-regular-152-line-height,1.5)] text-[var(--itartificer-com-nero,#FFFFFF)]">
              IT Artificer is a best software company in Peshawar and Islamabad,
              known for creating customized IT solutions tailored to meet...
            </span>
          </div>
          <div className="rounded-[50px] border-[1px_solid_var(--itartificer-com-venice-blue,#0C6793)] bg-[var(--itartificer-com-venice-blue,#0C6793)] m-[0_0_0_0.4px] flex p-[14px_0_14px_0] w-[391px] box-sizing-border">
            <span className="break-words font-['Open_Sans'] font-[var(--itartificer-com-open-sans-regular-153-font-weight,400)] text-[15px] leading-[var(--itartificer-com-open-sans-regular-153-line-height,1.1)] text-[var(--itartificer-com-nero,#FFFFFF)]">
              Skype us: itartificer | Call at: 0333-9296314
            </span>
          </div>
        </div>
        <div className="relative flex w-[1920px] h-[26px] box-sizing-border">
          <div className="border-[5px_solid_var(--itartificer-com-venice-blue,#0C6793)] bg-[var(--itartificer-com-nero,#FFFFFF)] w-[14px] h-[14px]"></div>
        </div>
      </div>
      {/* section below */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-10 text-center">
          <h2 className="text-[50px] text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4">
        {/* Left Line */}
        <div className="w-16 border-t-2 text-[#6e6e6e]"></div>
        {/* border-gray-300 */}
        
        {/* Laptop Icon */}
        <FaLaptop className="text-[#0c6793] text-2xl mx-4" />
        
        {/* Right Line */}
        <div className="w-16 border-t-2 text-[#6e6e6e]"></div>
      </div>
    </div>
          <p className="text-[#6e6e6e] text-[20px] mb-12">
            We are a creative design agency focused on full implementation
            services of all sizes.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Service 1 */}
            <div className="w-full md:w-1/3 px-4">
              <div className=" p-6 rounded-lg text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 border border-[#0c6793] rounded-sm transform rotate-45">
                  <FaRegComment className="text-[#0c6793] text-3xl transform -rotate-45" />
                </div>
                <h3 className="text-[23px] text-gray-800 mb-2">
                  24/7 Support
                </h3>
                <p className="text-[#6e6e6e] text-[20px] mb-4">
                  Our dedicated support team provides 24/7 support through
                  emails, Skype, and online calls.
                </p>
                <a href="#" className="text-[#0c6793] text-[20px] ">
                  Read More »
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="w-full md:w-1/3 px-4">
              <div className=" p-6 rounded-lg text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 border border-[#0c6793] rounded-md transform rotate-45">
                  <FaCog className="text-[#0c6793] text-3xl transform -rotate-45" />
                </div>
                <h3 className="text-[23px] text-gray-800 mb-2">
                  Web Hosting and Domain Services
                </h3>
                <p className="text-[#6e6e6e] text-[20px] mb-4">
                  Best Web Hosting and Domain Services. We provide services of
                  domain registration and...
                </p>
                <a href="#" className="text-[#0c6793] text-[20px]">
                  Read More »
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="w-full md:w-1/3 px-4">
              <div className=" p-6 rounded-lg text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 border border-[#0c6793] rounded-md transform rotate-45">
                  <FaWrench className="text-[#0c6793] text-3xl transform -rotate-45" />
                </div>
                <h3 className="text-[23px] text-gray-800 mb-2">
                  Web Development
                </h3>
                <p className="text-[#6e6e6e] text-[20px] mb-4">
                  Web Development Services. At ITA, we specialize in web
                  development and website...
                </p>
                <a href="#" className="text-[#0c6793] text-[20px]">
                  Read More »
                </a>
              </div>
            </div>
          </div>
          {/* second sec */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
             {/* Service 4: Responsive Layout */}
            <div className="w-full md:w-1/3 px-4">
              <div className=" p-6 rounded-lg text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 border border-[#0c6793] rounded-md transform rotate-45">
                  <FaMobileAlt className="text-[#0c6793] text-3xl transform -rotate-45" />
                </div>
                <h3 className="text-[23px] text-gray-800 mb-2">
                Responsive Layout
                </h3>
                <p className="text-[#6e6e6e] text-[20px] mb-4">
                We developed well to provide users optimal viewing experience, easy to read and...
                </p>
                <a href="#" className="text-[#0c6793] text-[20px]">
                  Read More »
                </a>
              </div>
            </div>

            {/* Service 5: Search Engine Optimization */}
            <div className="w-full md:w-1/3 px-4">
              <div className=" p-6 rounded-lg text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 border border-[#0c6793] rounded-md transform rotate-45">
                  <FaChartLine className="text-[#0c6793] text-3xl transform -rotate-45" />
                </div>
                <h3 className="text-[23px] text-gray-800 mb-2">
                Search Engine Optimization
                </h3>
                <p className="text-[#6e6e6e] text-[20px] mb-4">
                Search Engine Optimization Services provide throughout Khyber Pakhtunkhwa like Bill Boards, TV...
                </p>
                <a href="#" className="text-[#0c6793] text-[20px]">
                  Read More »
                </a>
              </div>
            </div>

            {/* Service 6: Professional Training */}
            <div className="w-full md:w-1/3 px-4">
              <div className=" p-6 rounded-lg text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 border border-[#0c6793] rounded-md transform rotate-45">
                  <FaGraduationCap className="text-[#0c6793] text-3xl transform -rotate-45" />
                </div>
                <h3 className="text-[23px] text-gray-800 mb-2">
                Professional Training
                </h3>
                <p className="text-[#6e6e6e] text-[20px] mb-4">
                Professional Training: We offer web development training for fresh graduates to spend a...
                </p>
                <Link to="https://itartificer.com/247-support/" className="text-[#0c6793] text-[20px]">
                  Read More »
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* some partner component below */}
      <PartnerCarousel />
      {/*  */}
      <RecentPost />
      {/*  */}
      <TestimonialCarousel/>
    </>
  );
};

export default Home;
