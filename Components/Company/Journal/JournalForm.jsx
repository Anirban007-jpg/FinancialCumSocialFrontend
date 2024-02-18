'use client'
import { getCookie, isAuth } from '@/actions/auth';
import { createJournalentries } from '@/actions/journal';
import { getLedgers } from '@/actions/ledger';
import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const JournalForm = () => {
  
   const [text]= useTypewriter({
    words: ['Journal Entry '],
    loop: {},
    typeSpeed:100,
    deleteSpeed:30
  })

  const [accountNames,setAccountNames] = useState([]);
  const [values,setValues] = useState({
    Transaction_Date : '',
    Financial_Year : '',
    Assessment_Year : '',
    Debit_item_Account : '',
    Credit_item_Account : '',
    company_name: '',
    Narration : '',
    Debit_Currency_Type : '',
    Credit_Currency_Type : '',
    Debit_item_Balance : '',
    Credit_item_Balance : '',
    Discount_Received: '',
    Discount_Allowed: '',
    error : '',
    success: ''
  })

  const {Transaction_Date,Discount_Allowed,Discount_Received,Financial_Year,Assessment_Year,Debit_item_Account,Credit_item_Account,company_name,Narration,Debit_Currency_Type,success,error,Credit_Currency_Type,Debit_item_Balance,Credit_item_Balance} = values;
  
  useEffect(() => {
    initAccountNames();
    values.company_name = isAuth().Company_Name;
    
  }, [])

  const handleChange = (name) => e => {
   setValues({...values, error: '', [name]: e.target.value})
  }

  const handleFormsubmitData = (e) => {
    e.preventDefault();
    setValues({...values, loading: true, error:''});
    const journal = {Transaction_Date,Financial_Year,Assessment_Year,Debit_item_Account,Credit_item_Account,Discount_Allowed,Discount_Received,company_name,Narration,Debit_Currency_Type,Credit_Currency_Type,Debit_item_Balance,Credit_item_Balance}
    const token = getCookie("token");
    createJournalentries(journal,token).then(data => {
            if (data.error){
                setValues({...values, error:data.error});
            }
            else{
                setValues({...values, error:'', success:data.message});
            }
        })
    }


  
  const initAccountNames = () => {
    const token = getCookie('token');
    getLedgers(token).then(data => {
        if (data.error){
            console.log(error);
        }
        else{
            setAccountNames(data);
            console.log(data);
        }
    })
  }

    return ( 
         <div className="inner sm:w-[75%] w-[75%] sm:mt[-150px] mt-[-150px] animate-customSlideIn">
            <form noValidate onSubmit={handleFormsubmitData}>
                    {success && <div className='mb-6 mt-[-10px] flex flex-row w-[75%] justify-center items-center ml-[40px] bg-green-200 sm:mb-6 sm:mt-[-10px] text-center text-green-800 font-bold'>
                       {success} 
                    </div> 
                    }
                    {error && <div className='mb-6 mt-[-10px] flex flex-row w-[75%] justify-center items-center ml-[40px] bg-red-200 sm:mb-6 sm:mt-[-10px] text-center text-red-800 font-bold'>
                       {error} 
                    </div> 
                    }
       
                <h3 className='uppercase font-3xl underline text-center mt-[-10px] mb-[12px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-pink-800'>{text} FORM</h3>
                <p className='text-center mb-[55px] font-semibold leading-2 underline'>Please Enter journal details</p>
                <div className="grid grid-cols-1 mt-[-25px]">
                    <div className="relative bg-gray-300 rounded-lg">
                        <input value={Transaction_Date} onChange={handleChange("Transaction_Date")} type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-soild focus:border-[2px] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300 dark:bg-gray-300 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-focus:font-bold peer-placeholder-shown:-translate-y-1/2 peer-focus:rounded-lg peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-md start-1">Transaction Date : DD/MM/YYYY</label>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-[20px]">
                        <div className="relative">
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Financial Year</label>           
                            <select value={Financial_Year} onChange={handleChange("Financial_Year")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                <option value="">Choose Financial Year</option>
                                <option value="2023-2024">2023-2024</option>
                                <option value="2024-2025">2024-2025</option>
                            </select>
                        </div>
                        <div className="relative">
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Financial Year</label>           
                            <select value={Assessment_Year} onChange={handleChange("Assessment_Year")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                <option value="">Choose Assessment Year</option>
                                <option value="2023-2024">2024-2025</option>
                                <option value="2024-2025">2025-2026</option>
                            </select>
                        </div>
                </div>
                <div className="grid grid-cols-1 mt-[20px]">
                    <div className="relative">
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Debit Account</label>           
                            <select value={Debit_item_Account} onChange={handleChange("Debit_item_Account")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                {accountNames.map((object, index) => (
                                    <option key={index} value={object.AccountName}>{object.AccountName}</option>
                                ))}
                            </select>
                    </div>
                </div>
                {Debit_item_Account == "Purchases" && <div className="grid grid-cols-1 mt-[20px]">
                    <div className="relative bg-gray-300 rounded-lg">
                        <input value={Discount_Received} onChange={handleChange("Discount_Received")} type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-soild focus:border-[2px] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300 dark:bg-gray-300 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-focus:font-bold peer-placeholder-shown:-translate-y-1/2 peer-focus:rounded-lg peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-md start-1">Discount Received %</label>
                    </div>
                </div>}
                <div className="grid grid-cols-2 gap-5 mt-[20px]">
                    <div className="relative bg-gray-300 rounded-lg">
                        <input value={Debit_Currency_Type} onChange={handleChange("Debit_Currency_Type")} type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-soild focus:border-[2px] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300 dark:bg-gray-300 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-focus:font-bold peer-placeholder-shown:-translate-y-1/2 peer-focus:rounded-lg peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-md start-1">Debit Amount Currency</label>
                    </div>
                    <div className="relative bg-gray-300 rounded-lg">
                        <input value={Debit_item_Balance} onChange={handleChange("Debit_item_Balance")} type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-soild focus:border-[2px] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300 dark:bg-gray-300 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-focus:font-bold peer-placeholder-shown:-translate-y-1/2 peer-focus:rounded-lg peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-md start-1">Debit Amount</label>
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-[20px]">
                    <div className="relative">
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Credit Account</label>           
                            <select value={Credit_item_Account} onChange={handleChange("Credit_item_Account")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                {accountNames.map((object, index) => (
                                    <option key={index} value={object.AccountName}>{object.AccountName}</option>
                                ))}
                            </select>
                    </div>
                </div>
                {Credit_item_Account == "Sales" && <div className="grid grid-cols-1 mt-[20px]">
                    <div className="relative bg-gray-300 rounded-lg">
                        <input value={Discount_Allowed} onChange={handleChange("Discount_Allowed")} type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-soild focus:border-[2px] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300 dark:bg-gray-300 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-focus:font-bold peer-placeholder-shown:-translate-y-1/2 peer-focus:rounded-lg peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-md start-1">Discount Allowed %</label>
                    </div>
                </div>}
               
                <div className="grid grid-cols-2 gap-5 mt-[20px]">
                    <div className="relative bg-gray-300 rounded-lg">
                        <input value={Credit_Currency_Type} onChange={handleChange("Credit_Currency_Type")} type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-soild focus:border-[2px] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300 dark:bg-gray-300 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-focus:font-bold peer-placeholder-shown:-translate-y-1/2 peer-focus:rounded-lg peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-md start-1">Credit Amount Currency</label>
                    </div>
                    <div className="relative bg-gray-300 rounded-lg">
                        <input value={Credit_item_Balance} onChange={handleChange("Credit_item_Balance")} type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-soild focus:border-[2px] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300 dark:bg-gray-300 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-focus:font-bold peer-placeholder-shown:-translate-y-1/2 peer-focus:rounded-lg peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-md start-1">Credit Amount</label>
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-[20px]">
                    <div className="relative bg-gray-300 rounded-lg">
                        <input value={values.company_name} type="text" disabled className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-soild focus:border-[2px] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300 dark:bg-gray-300 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-focus:font-bold peer-placeholder-shown:-translate-y-1/2 peer-focus:rounded-lg peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-md start-1">Credit Amount</label>
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-[10px]">
                    <div className="relative bg-gray-300 rounded-lg">
                        <textarea value={Narration} onChange={handleChange("Narration")} row="2" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-soild focus:border-[2px] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300 dark:bg-gray-300 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-focus:font-bold peer-placeholder-shown:-translate-y-1/2 peer-focus:rounded-lg peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-md start-1">Narration</label>
                    </div>
                </div>
                <div className="mt-[10px]">
                    <button className="w-[50%] sm:w-[75%] ml-[170px] justify-center items-center flex sm:ml-[40px] rounded-full bg-purple-500 py-3 text-center text-white">Submit</button>
                </div>  
                </form>
            </div>
    );
}
 
export default JournalForm;