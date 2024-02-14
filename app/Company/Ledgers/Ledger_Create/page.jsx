
import Sidebar from '@/Components/Company/Common/Sidebar';
import Ledgerview from '@/Components/Company/Ledger/Ledgerview';
import React from 'react';


export const metadata = {
    title: "Ledger Creation | FINANCIA",
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
            <Ledgerview/>
          </div>
        </div>
    );
}
 
export default page;