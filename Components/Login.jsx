'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa6';
import Heading from '@/Components/Heading';
// import Login from '@/Components/Heading';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { authenticate, isAuth, signin } from '@/actions/auth';

const Login = () => {
    const [values,setValues] = useState({
        TAN_No: '',
        password: '',
        loading: false,
        error: ''
    })

    const {TAN_No,loading,error,password} = values;

    const router = useRouter();

    useEffect(() => {
        if (isAuth() && isAuth().role === 'Company'){
         router.push('/Company/Dashboard')
        }else  if (isAuth() && isAuth().role === 'Admin'){
            router.push('/Admin/Dashboard')
        }
      }, [])

    const handleChange = (name) => e => {
        setValues({...values, error: '', [name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values, loading: true, error:''});
        const company = {TAN_No,password};
        signin(company).then(data => {
            if (data.error){
                setValues({...values, error: data.error, loading:false});
            }
            else{
                authenticate(data, ()=>{
                    if (isAuth() && isAuth().role === "Company"){
                        router.push('/Company/Dashboard')
                    }else if (isAuth() && isAuth().role === "Admin"){
                        router.push('/Admin/Dashboard')
                    } 
                })
            }
        })
    }

    const showError = () => error ? <div className="alert alert-danger">{error}</div> : '';
    
    return (
        <>
                <div className='flex flex-col gap-x-0 gap-y-7 w-[300px]'>
                    {/* Heading */}
                        <Heading/>
                    {/* Login Form */}
                        <form className='flex mb-2 ml-5 mr-5 flex-col gap-y-3' onSubmit={handleSubmit} noValidate>
                            <input type='text' value={TAN_No} onChange={handleChange('TAN_No')} placeholder='Company TAN' className='text-black font-bold text-sm p-2 rounded-2xl bg-slate-200 outline-none tracking-widest' />
                            <input type='password' value={password} onChange={handleChange('password')} placeholder='Password' className='text-black font-bold text-sm p-2 rounded-2xl bg-slate-200 outline-none tracking-widest mt-4'/>
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
 