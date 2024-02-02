import Navbar from '@/Components/Navbar';
import Navigation from '@/Components/Navigation';
import React from 'react';

export const metadata = {
    title: "About Us Page | FINANCIA",
    description: "Managing Financial Data",
    metadataBase: new URL('http://localhost:3000/'),
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
            <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/main-bg.webp"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        
      </div>
    
      </div>
        </main>
        <Navigation/>
        </>
      );
}
 
export default page;