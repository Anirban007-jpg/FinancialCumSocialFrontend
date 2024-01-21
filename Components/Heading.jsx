'use client'
import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
// import Image from 'next/image';


const Heading = () => {
    const [text]= useTypewriter({
        words: ['Welcome Back!', 'Please Sign in!'],
        loop: {},
        typeSpeed:60,
        deleteSpeed:50
      })

      return ( 
        <h1 className='text-2xl mt-3 font-semibold text-white ml-16'><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">{text}</span><span style={{color:'red'}}><Cursor cursorStyle="|" /></span></h1>
     );
}
 
export default Heading;