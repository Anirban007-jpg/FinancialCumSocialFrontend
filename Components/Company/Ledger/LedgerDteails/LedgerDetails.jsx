'use client'
import { getCookie } from '@/actions/auth';
import { getLedgers, getLedgersDetails } from '@/actions/ledger';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const LedgerDetails = () => {

    const [accountNames,setAccountNames] = useState([]);
    const [details,setDetails] = useState([]);

    const [values,setValues] = useState({
        Financial_Year : '',
        AccountName : '',
        error : '',
        success: ''
      })
    
    const {Financial_Year,AccountName,error} = values;
    
    const columns = [
        {
            name: 'Transaction Date',
            selector : row => row.transaction_date
        },
        {
            name: 'Debit A/C',
            selector : row => row.transaction_date
        },
        {
            name: 'Debit Amt',
            selector : row => row.transaction_date
        },
        {
            name: 'Credit A/C',
            selector : row => row.transaction_date
        },
        {
            name: 'Credit Amt',
            selector : row => row.transaction_date
        },
        {
            name: 'Narration',
            selector : row => row.transaction_date
        }
    ]
    
    useEffect(() => {
        initAccountNames();
    }, [])

    const handleChange = (name) => e => {
        setValues({...values, error: '', [name]: e.target.value})
    }

    const handleFormsubmitData = (e) => {
        e.preventDefault();
        setValues({...values, error:''});
        const journal = {Financial_Year,AccountName};
        const token = getCookie("token");
        getLedgersDetails(journal, token).then(data => {
            if (data.error){
                setValues({...values, error:data.error});
            }else{
                setDetails(data);
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
        <>
        <div className='flex flex-row pt-3 pl-5 mt-[15px] ml-4 border-[2px] border-solid items-center justify-center border-green-800 h-[20%] w-[80%]'>
            <form className='' onSubmit={handleFormsubmitData} noValidate>    
                <h1 className='font-bold text-center mt-[-30px] uppercase underline mb-[15px] text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500'>Enter Ledger Data...</h1>
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
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Debit Account</label>           
                                <select value={AccountName} onChange={handleChange("AccountName")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    {accountNames.map((object, index) => (
                                        <option key={index} value={object.AccountName}>{object.AccountName}</option>
                                    ))}
                                </select>
                        </div>
                        <div className="mt-0">
                            <button className="w-[50%] sm:w-[75%] ml-[200px] justify-center items-center flex sm:ml-[40px] rounded-full bg-purple-500 py-3 text-center text-white">Search</button>
                        </div>  
                </div>
            </form> 
        </div>
        <hr className='mt-[10px] w-[83%] border-[1px] border-solid border-black'/>
        <div className='container mt-5'>
            {details && details.map((object, index) => (
                object
            ))}
        </div>
        </> 
    );
}
 
export default LedgerDetails;