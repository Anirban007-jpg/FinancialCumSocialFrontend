'use client'
import React, { useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Main from './Main';
import { getCookie, isAuth, removeLocalStorage } from '@/actions/auth';
import { useRouter } from 'next/navigation';

const Journalview = () => {

    const router = useRouter();

    useEffect(() => {
        if (getCookie('token') == null || !isAuth()){
            removeLocalStorage('company');
            router.push('/');
        }
    }, [])

    useEffect(() => {
        if (getCookie('token') != null || isAuth()){
            if (isAuth().role == 'Admin'){
                router.push('/Admin/Dashboard')
            }
        }
    }, [])

    return ( 
        <>
            <Navbar/>
            <Main/>
        </>
    );
}
 
export default Journalview;