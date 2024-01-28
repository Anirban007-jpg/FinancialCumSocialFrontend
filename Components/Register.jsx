import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import HeadingRegister from './HeadingRegistration';
import HeadingRegistrationFor from './HeadingRegistrationForm';
// import TransitionRegister from './TransitionRegister'; 
// import TransitionForRegistration from './TransitionForRegistration';

const Register = () => {
    return (
        <div className="min-h-screen py-40" style={{backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)"}}>
            
        <div className="container mx-auto animate-customSlideIn">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <HeadingRegister />
            <div className="w-full lg:w-1/2 py-16 px-12">
              <HeadingRegistrationFor/>
              <form action="#">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="TAN_No" className="border border-gray-400 py-1 px-2" />
                  <input type="text" placeholder="Surname" className="border border-gray-400 py-1 px-2" />
                </div>
                <div className="mt-5">
                  <input type="tex /t" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400"/>
                  <span>
                    I accept the <Link href="#" className="text-purple-500 font-semibold">Terms of Use</Link> &  <Link href="#" className="text-purple-500 font-semibold">Privacy Policy</Link> 
                  </span>
                </div>
                <div className="mt-5">
                  <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        
    );
}
 
export default Register;