'use client'
// import Navbar from '@/Components/Navbar';
import React, { useEffect } from 'react';
import { getCookie, isAuth, removeLocalStorage } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import Main from './Main';
import Navbar from '../Common/Navbar';

const LedgerView = () => {
    
    const router = useRouter();

    useEffect(() => {
        if (getCookie('token') === null || !isAuth()){
            removeLocalStorage('company');
            router.push('/');
        }
    })

    useEffect(() => {
        if (getCookie('token') !== null || isAuth()){
            if (isAuth().role === 'Admin'){
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
 
export default LedgerView;