'use client'
import { getCookie, isAuth, signout } from '@/actions/auth';
import { useRouter } from 'next/navigation';
// import classNames from 'classnames';
// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaEnvelope, FaRegBell } from 'react-icons/fa6';


const Navbar = () => {
    const router = useRouter();
    const [Initials, setInitials]  = useState('');
    const [Company, setCompany]  = useState('');
    const [open,setOpen] = useState(false);

    const showDropDown = () => {
        setOpen(!open);
    }
    useEffect(() => {
        if (getCookie('token') !== null && isAuth()){
        setInitials(isAuth().Initials);
        setCompany(isAuth().Company_Name);
        }
    },[])

    return (  
        <div className='bg-gray-100 flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
        <div className='flex item-center rounded-[5px]'>
            <input type='text' className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] mt-[2px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for...'></input>
            <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                <FaSearch color='white'/>
            </div>
        </div>
        <div className='flex items-center gap-[15px] relative'>
            <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                <FaRegBell />
                <FaEnvelope/>
            </div>
            <div className='flex items-center gap-[15px] relative' onClick={showDropDown}>
                <p className='font-bold text-blue-500 '>
                    {Company}
                </p>
                <div className='h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative'>
                    <p className='font-bold'>{Initials}</p>
                </div>

                {
                    open && 
                    <div className='bg-gray-300 border h-[120px] w-[150px] absolute bottom-[-130px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
                        <p className='cursor-pointer hover:text-[blue] font-semibold' onClick={() => signout(() => router.push('/'))}>Logout</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Logout</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Logout</p>
                    </div>
                }
            </div>
            </div>
        </div>  
    );
}
 

export default Navbar;