
import Login from '@/Components/Login';
import React from 'react';


export const metadata = {
    title: "Login Page | FINANCIA",
    description: "Generated by create next app",
};



const page = () => {
    return ( 
        <div className="flex h-screen justify-center items-center w-full gap-x-0" style={{backgroundImage: "url(/main-bg.webp)"}}>
          <Login/>
        </div>   
    );
}
 
export default page;