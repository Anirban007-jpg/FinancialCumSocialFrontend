'use client'
// import Navbar from '@/Components/Navbar';
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Main from '../dashboard/Main';
import { getCookie, isAuth, removeLocalStorage } from '@/actions/auth';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

const Dashboardview = () => {

    const router = useRouter();

    useEffect(() => {
        if (getCookie('token') === null || !isAuth()){
            removeLocalStorage('company');
            router.push('/');
        }
    })

    useEffect(() => {
        if (getCookie('token') !== null || isAuth()){
            if (isAuth().role === 'Company'){
                router.push('/Company/Dashboard')
            } else if (isAuth().role === 'Admin'){
                router.push('/Admin/Dashboard')
            }
        }
    })

    return ( 
        <>
      <Navbar/>
      <Main/>
      </>
      
    );
}
 
export default Dashboardview;