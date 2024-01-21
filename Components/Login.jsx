import React from 'react';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa6';
import Heading from '@/Components/Heading';
// import Login from '@/Components/Heading';
import Image from 'next/image';

const Login = () => {
    return (
        <>
                <div className='flex flex-col gap-x-0 gap-y-7 w-[300px]'>
                    {/* Heading */}
                        <Heading/>
                    {/* Login Form */}
                        <form className='flex mb-2 ml-5 mr-5 flex-col gap-y-3'>
                            <input type='text' placeholder='Company TAN' className='text-white text-sm p-2 rounded-2xl bg-slate-200 outline-none tracking-widest' />
                            <input type='password' placeholder='Password' className='text-white text-sm p-2 rounded-2xl bg-slate-200 outline-none tracking-widest mt-4'/>
                            <input type='submit' value='LOGIN' className='bg-slate-700 text-white tracking-wider p-2 rounded-2xl font bold transition-colors hover:bg-purple-800 cursor-pointer' />
                        </form>
                    {/* End of Login Form */}   

                    <span className='border-t-2 w-full text-center text-white mt-3 font-bold'>OR</span>

                    {/* Google Button */}
                    <button className='bg-slate-400 p-2 rounded-2xl flex font-bold ml-5 mr-5 justify-center items-center gap-x-5 hover:bg-green-500 cursor-pointer'>
                        <FaGoogle className='bx bxt-google text-yellow-500 text-xl'/> {" "}
                        <span className='text-sm text-white tracking-wider'> Login with Google</span>
                    </button>
                    {/* End of Google Button */}
         
                    <Link href="#" className='text-xs text-blue-400 font-semibold underline justify-center text-center'>Forgot my Password?</Link>
                  
                </div>     
                <div className='relative w-[600px] grid place-items-center'>
                    <Image src="/room.jpeg" alt="room" className='absolute rounded-2xl' width={500} height={500}/>
                    <Image src="/room.gif" alt="room" className='absolute rounded-2xl' width={500} height={500} />
                </div>
            </>
      );
}
 
export default Login;
 