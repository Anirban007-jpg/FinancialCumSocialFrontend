'use client'
import Link from 'next/link';
import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
// import Image from 'next/image';


const HeadingRegister = () => {
    const [text]= useTypewriter({
        words: ['Welcome Companies'],
        loop: {},
        typeSpeed:60,
        deleteSpeed:50
      })

      const [text1] = useTypewriter ({
        words: [''],
        loop: {},
        typeSpeed:60,
        deleteSpeed:50
      })

      return ( 
        
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url(/Register-Background.png)"}} >
        <h1 className="text-white text-3xl mb-3 font-bold">{text}</h1>
        <div>
          <p className="text-white">{text1}<Link href="#" className="text-purple-500 font-semibold"> Learn More</Link></p>
        </div>
      </div>
     );
}
 
export default HeadingRegister;