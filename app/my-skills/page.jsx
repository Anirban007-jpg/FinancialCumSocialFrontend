import MySkills from '@/Components/MySkills';
import Navbar from '@/Components/Navbar';
import Navigation from '@/Components/Navigation';
import React from 'react';

export const metadata = {
    title: "Skills Page | FINANCIA",
    description: "Managing Financial Data",
    url: 'http//localhost:3000/',
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/creative.png'
        }
      ]
    },
    locale: 'en_US',
    type: 'website'
};

const page = () => {
    return (  
        <>
        <Navbar/>
        <MySkills/>
        <Navigation/> 
        </>
        
    );
}

export default page;