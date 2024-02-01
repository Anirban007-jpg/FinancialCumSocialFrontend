'use client'
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const HeadingForForgotPasswordForm = () => {
    const [text]= useTypewriter({
        words: ['your passowrd token here!!!'],
        loop: {},
        typeSpeed:90,
        deleteSpeed:80
      })

    return (  
        <>
          <p className="mt-[5px] mb-[20px] text-2xl font-bold text-center text-white ">
                Reset your password!!
        </p>
        </>
    );
}
 
export default HeadingForForgotPasswordForm
