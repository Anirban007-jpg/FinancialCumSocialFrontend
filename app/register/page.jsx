import Navbar from '@/Components/Navbar';
import Navigation from '@/Components/Navigation';
import Register from '@/Components/Register';
// import TransitionRegister from '@/Components/TransitionRegister';
// import TransitionForRegistration from '@/Components/TransitionForRegistration';
import React from 'react';

export const metadata = {
    title: "Register Page | FINANCIA",
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
        <Register/>
        <Navigation/>
        </>
    );
}
 
export default page;