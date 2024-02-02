
import Login from '@/Components/Login';
import Navbar from '@/Components/Navbar';
import Navigation from '@/Components/Navigation';
import React from 'react';


export const metadata = {
    title: "Login Page | FINANCIA",
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
        <div className="flex h-screen justify-center items-center w-full gap-x-0" style={{backgroundImage: "url(/main-bg.webp)"}}>
          <Login/>
        </div>   
        <Navigation/>
        </>
        
    );
}
 
export default page;