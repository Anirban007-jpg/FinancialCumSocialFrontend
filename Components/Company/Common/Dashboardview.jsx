// import Navbar from '@/Components/Navbar';
import React from 'react';
import Navbar from './Navbar';
import Main from '../dashboard/Main';

const Dashboardview = ({isOpen}) => {

    
    return ( 
        <>
      <Navbar/>
      <Main/>
      </>
      
    );
}
 
export default Dashboardview;