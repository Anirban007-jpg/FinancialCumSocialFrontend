import Sidebar from '@/Components/Company/Common/Sidebar';
import Journalview from '@/Components/Company/Journal/journalview';
import React from 'react';



export const metadata = {
    title: "Journal Creation | FINANCIA",
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
            <Journalview/>
          </div>
        </div>
    );
}
 
export default page;