import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to <b>BookMyLawyer</b>, your trusted partner in managing your legal needs with convenience and efficiency. At BookMyLawyer, we understand the difficulties individuals and businesses face when it comes to finding the right lawyer and scheduling consultations.</p>
          <p>We are committed to excellence in legal-tech solutions. Our platform brings together experienced lawyers across multiple fields of law, making it easier for you to connect with the right professional. Whether you're seeking advice for the first time or managing ongoing legal cases, BookMyLawyer is here to support you at every stage.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at BookMyLawyer is to make legal services accessible and seamless for everyone. We aim to bridge the gap between clients and lawyers, ensuring that professional legal help is always just a few clicks away.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined lawyer appointment scheduling that saves you time and effort.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access a wide network of verified and trusted legal professionals in your area or online.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Get lawyer recommendations tailored to your case type, along with timely reminders for appointments.</p>
        </div>
      </div>

    </div>
  )
}

export default About
