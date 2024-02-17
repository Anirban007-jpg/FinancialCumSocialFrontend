'use client'
import React, { useState } from 'react';
import { getCookie } from '@/actions/auth';

import { isAuth } from '@/actions/auth';
import { useTypewriter } from 'react-simple-typewriter';
import { createLedger } from '@/actions/ledger';


const LedgerForm = () => {
     
    const [values, setValues] = useState({
        AccountName: '',
        AccountGroup: '',
        SubAccountGroup: '',
        IndividualAccountGroup: '',
        company_name: '',
        Balance_Type: '',
        Financial_Year : '',
        Currency_Type: '',
        balStart: '',
        error: '',
        success: ''
   });

   const [text]= useTypewriter({
    words: ['Enter Ledger Details!!'],
    loop: {},
    typeSpeed:90,
    deleteSpeed:80
  })

    const {AccountName,AccountGroup,SubAccountGroup,IndividualAccountGroup,Balance_Type,Financial_Year,Currency_Type,balStart,error,success} = values;

    values.company_name = isAuth().Company_Name;
    
   const handleChangeInput = (name) => e => {
    setValues({...values, error: '', [name]: e.target.value})
    }

   
    const token = getCookie('token');
    const handleFormsubmitData = (e) => {
        e.preventDefault();
        setValues({...values, loading: true, error:''});
        const ledger = {AccountName,AccountGroup,SubAccountGroup,IndividualAccountGroup,Balance_Type,Financial_Year,Currency_Type,balStart,error,success};
        console.log(ledger);
        createLedger(ledger, token).then(data => {
            if (data.error){
                setValues({...values, error:data.error});
            }
            else{
                setValues({...values, error:'', success:data.message});
            }
        })
    }

    return (
        <div className='w-[80%] max-w-full rounded-lg'>
        <div className='container_box'>
            <div className='box sm:h-[480px] sm:position-relative sm:w-[75%] sm:border-r-[8px]'>
                <form className='container_form mx-auto animate-customSlideIn sm:mt-[-80px] md:mt-[-120px] mt-[-150px]' onSubmit={handleFormsubmitData} noValidate>
                    {success && <div className='mb-6 mt-[-10px] flex flex-row w-[75%] justify-center items-center ml-[40px] bg-green-200 sm:mb-6 sm:mt-[-10px] text-center text-green-800 font-bold'>
                       {success} 
                    </div> 
                    }
                    {error && <div className='mb-6 mt-[-10px] flex flex-row w-[75%] justify-center items-center ml-[40px] bg-red-200 sm:mb-6 sm:mt-[-10px] text-center text-red-800 font-bold'>
                       {error} 
                    </div> 
                    }
                    <h1 className='font-bold text-center mt-[-20px] mb-[15px] headingforLedg text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500'>Please {text}</h1>
                    <div className="grid grid-cols-1 gap-5">
                        <div className="relative">
                            <input value={AccountName} type="text" onChange={handleChangeInput('AccountName')} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Account Name</label>
                        </div>    
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-5">   
                        <div className="relative">
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Account Group</label>           
                            <select value={AccountGroup} onChange={handleChangeInput('AccountGroup')} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                <option value="">Choose Account Group</option>
                                <option value="Employee Benifits Expense">Employee Benifits Expense</option>
                                <option value="Finance Costs">Finance Costs</option>
                                <option value="Depreciation and amortization Expense">D&A Expenses</option>
                                <option value="Other Expense">Other Expense</option>
                                <option value="Other Income">Other Income</option>
                                <option value="Exceptional Items">Exceptional Items</option>
                                <option value="Extraordinary Items">Extraordinary Items</option>
                                <option value="Long term Borrowings">Long Term Borrowings</option>
                                <option value="Other Long Term provisions">Other Long Term Provisions</option>
                                <option value="Long Term Provisions">Long Term Provisions</option>
                                <option value="Short Term borrowings">Short Term borrowings</option>
                                <option value="Trade Payables">Trade Payables</option>
                                <option value="Other Current Liabilities">Other Current Liabilities</option>
                                <option value="Purchase of Raw Materials">Purchase of Raw Materials</option>
                                <option value="Short Term Provisions">Short Term Provisions</option>
                                <option value="Tangible assets">Tangible Assets</option>
                                <option value="Intangible assets">Intangible Assets</option>
                                <option value="Non Current investement">Non Current Investements</option>
                                <option value="Other Non current assets">Other Non Current Assets</option>
                                <option value="Reserves & Surplus">Reserves & Surplus</option> 
                                <option value="Long Term Loans and advances">Long Term Loans and Advances</option>
                                <option value="Current Investments">Current Investments</option>
                                <option value="Cash and Cash Equivalents">Cash and Cash Equivalents</option>
                                <option value="Short Term Loans and advances">Short Term Loans and Advances</option>
                                <option value="Revenue from Operations">Revenue from Operations</option>
                                <option value="Other Current Assets">Other Current Assets</option>
                                <option value="Trade Receivables">Trade Receivables</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div className="relative">
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Sub Account Group</label>           
                            <select value={SubAccountGroup} onChange={handleChangeInput('SubAccountGroup')} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                <option value="">Choose Sub Account Group</option>
                                <option value="Expenses">Expenses</option>
                                <option value="Revenue">Revenue</option>
                                <option value="Contingent Liability">Contingent Liability</option>
                                <option value="Current Assets">Current Assets</option>
                                <option value="Non-Current Assets">Non-Current Assets</option>
                                <option value="Current Liabilities">Current Liabilities</option>
                                <option value="Non-Current Liabilities">Non-Current Liabilities</option>
                                <option value="Shareholder's Fund">Shareholder's Fund</option>
                            </select>
                        </div>
                        <div className="relative">
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Individual Account Group</label>           
                            <select value={IndividualAccountGroup} onChange={handleChangeInput('IndividualAccountGroup')} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                <option value="">Choose Individual Account Group</option>
                                <option value="Expenses">Expenses</option>
                                <option value="Revenue">Revenue</option>
                                <option value="Assets">Assets</option>
                                <option value="Liabilities">Liabilities</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div className="relative">
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company Name</label>           
                            <input value={values.company_name} type="text" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled/> 
                        </div>
                        <div className="relative">
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Individual Account Group</label>           
                            <select value={Balance_Type} onChange={handleChangeInput('Balance_Type')} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                <option value="">Choose Balance Type</option>
                                <option value="Dr">Debit</option>
                                <option value="Cr">Credit</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div className="relative">
                            <input value={Currency_Type} type="text" onChange={handleChangeInput('Currency_Type')} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Currency Type</label>           
                        </div>
                        <div className="relative">
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Financial Year</label>           
                            <select value={Financial_Year} onChange={handleChangeInput('Financial_Year')} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                <option value="">Choose Financial Year</option>
                                <option value="2023-2024">2023-2024</option>
                                <option value="2024-2025">2024-2025</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div className="relative">
                            <input value={balStart} type="text" onChange={handleChangeInput('balStart')} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Opening Balance</label>           
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className={"w-[50%] sm:w-[75%] ml-[170px] justify-center items-center flex sm:ml-[40px] rounded-full bg-purple-500 py-3 text-center text-white" }>Submit</button>
                    </div>                
                </form>
            </div>
        </div>

        </div>
    );
}
 


export default LedgerForm;