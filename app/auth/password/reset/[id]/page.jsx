
import Navbar from '@/Components/Navbar';
import ResetPasswordForm from '@/Components/ResetPasswordForm';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

export const metadata = {
    title: "Reset Password Page | FINANCIA",
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
            <main className="w-screen h-screen relative">
                    <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/main-bg.webp"}}>
                        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
                            <ResetPasswordForm />
                        </div>
                    </div>
                    <div className="absolute bottom-0 z-[5] w-full h-auto">
                        <Image src="/trees.webp" alt="trees" height={2000} width={2000} className="w-full h-full" />
                    </div>
                        <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-10 left-0 z-[10]"/>
            </main>
        </>
    );
}
 
export default page;