import Dashboardview from '@/Components/Company/Common/Dashboardview';
import Navbar from '@/Components/Company/Common/Navbar';
import Sidebar from '@/Components/Company/Common/Sidebar';

import React from 'react';


export const metadata = {
    title: "Company Dashboard | FINANCIA",
    description: "Managing Financial Data",
    url: 'http//localhost:3000/',
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/creative.png'
        }
      ]
    },
    locale: 'en_US',
    type: 'website'
};



const page = () => {
  

    return (        
        <div className='flex'>
          <div className='basis-[12%]'>
            <Sidebar/>
          </div>
          <div className='basis-[88%]'>
            <Dashboardview/>
          </div>
        </div>
    );
}
 
export default page;