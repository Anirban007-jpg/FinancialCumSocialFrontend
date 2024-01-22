'use client'
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const HeadingRegistrationForm = () => {
    const [text]= useTypewriter({
        words: ['Create your account. It’s free and only take a minute'],
        loop: {},
        typeSpeed:60,
        deleteSpeed:80
      })

    return (  
        <>
        <h2 className="text-3xl mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-800 font-bold" style={{textDecoration:'underline'}}>Register</h2>
              <p className="mb-6 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500 ">
                {text}
        </p>
        </>
    );
}
 
export default HeadingRegistrationForm
