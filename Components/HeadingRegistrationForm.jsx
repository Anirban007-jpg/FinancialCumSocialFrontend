'use client'
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const HeadingRegistrationForm = () => {
    const [text]= useTypewriter({
        words: ['your account Here!!'],
        loop: {},
        typeSpeed:90,
        deleteSpeed:80
      })

    return (  
        <>
          <p className="mb-4 top-[-2px] text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500 ">
                Create {text}
        </p>
        </>
    );
}
 
export default HeadingRegistrationForm
