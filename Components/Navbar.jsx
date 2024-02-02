import { InstSocial, Socials } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (  
        <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
            <div className='flex flex-row gap-3 items-center'>
                <Image src="/horseLogo.jpg" alt='logo' width={40} height={40} className='w-full h-full object-contain rounded-full' />
                <h1 className='text-white text-[25px] font-bold'>{process.env.API_NAME}</h1>
            </div>
            <div className='flex flex-row gap-5 mb-2'>
                {Socials.map((social) => (
                    <Link href="https://www.facebook.com/profile.php?id=61556025035452" target='_blank'>
                        <Image key={social.name} src={social.src} alt={social.name} width={20} height={20} />
                    </Link>
                    
                ))}
                <Link href="https://www.instagram.com/financia2926/" target='_blank'>
                    <Image src='/instagram.svg' alt='instagram' width={20} height={20} />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;