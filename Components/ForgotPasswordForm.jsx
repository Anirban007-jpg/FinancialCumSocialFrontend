'use client'
import { isAuth } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import HeadingForForgotPasswordForm from './HeadingForForgotPasswordForm';


const ForgotPasswordForm = () => {

    const router = useRouter();

    const [values,setValues] = useState({
      registered_company_email: '',
      loading: false,
      error: '',
      message: ''
    });

    const {registered_company_email,error,message,loading} = values;
    
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
    }


     const showLoading = () => loading ?           <div className="text-right rtl:text-left">
        <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
 <span className="sr-only">Loading...</span>
 </div>
</div> : '';
 const showError = () => error ? <div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
 </svg>
 <span class="sr-only">Info</span>
 <div class="ms-3 text-sm font-medium">
   <p className='text-center text-red-600 font-bold'>{error}</p>
 </div>
 <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
   <span class="sr-only">Close</span>
   <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
   </svg>
 </button>
 </div>
: '';
 const showMessage = () => message ? <div id="alert-3" class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
 <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
 </svg>
 <span class="sr-only">Info</span>
 <div class="ms-3 text-sm font-medium">
   <p className='text-center text-black font-bold'>{message}</p>
 </div>
 <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
   <span class="sr-only">Close</span>
   <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
   </svg>
 </button>
</div> : '';
    return ( 
        <>
            <div className='itemns-center mt-[10px] mb-[10px]'>
                {showLoading()}
                {showMessage()}
                {showError()}
            </div>
             <div className='flex flex-col items-center mt-[-100px] gap-x-0 gap-y-0 w-[2050px]'>
                    {/* Heading */}
                        <HeadingForForgotPasswordForm />
                    {/* Login Form */}
                        <form className='flex items-center mb-2 ml-5 mr-5 flex-col gap-y-3 w-[550px]' onSubmit={handleSubmit} noValidate>
                            <input type='text' value={registered_company_email} onChange={handleChange('registered_company_email')} placeholder='Provide Company email' className='text-black font-bold text-sm p-2 rounded-2xl w-[550px] bg-slate-200 outline-none tracking-widest' />
                            <input type='submit' value='LOGIN' className='bg-blue-700 w-[200px] text-white tracking-wider p-2 rounded-2xl font bold transition-colors hover:bg-purple-800 cursor-pointer' />
                        </form>                    {/* End of Login Form */}   
                </div>     
              
        </>   

        
     );
}
 
export default ForgotPasswordForm;