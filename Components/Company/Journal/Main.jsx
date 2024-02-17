import React from 'react';
import JournalForm from './JournalForm';

const Main = () => {
    return ( 
        <div className='min-h-[100vh] flex items-center h-[94%] pt-[25px] justify-center pl-[75px] bg-white p-4' style={{backgroundImage : "url(/bg-registration-form-7.jpg)",backgroundSize:"cover"}}>
            <JournalForm/>
        </div>
    );
}
 
export default Main;