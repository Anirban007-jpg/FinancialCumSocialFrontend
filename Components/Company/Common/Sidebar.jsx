'use client'
import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown, FaArrowDown, FaBars, FaBookJournalWhills } from 'react-icons/fa6';
import { FaAccessibleIcon, FaHome } from 'react-icons/fa';
import logo from '../../../public/F.jpg';
import { usePathname } from 'next/navigation';
import { SiHyperledger } from "react-icons/si";
import SidebarMenu from './SidebarMenu';
import Dashboardview from './Dashboardview';


const MenuOptions = [
  
  {
    title: "Dashbaords",
    MenuList:[
      {
        title: "Home",
        path: "/Company/Dashboard",
        icon: <FaHome />,
        submenu:  false
      }
    ]
    
   },
   {
     title: "Journal and Ledgers",
     MenuList: [
      {
        title: "Posting Journal",
        path: "/Company/Journal-Entries",
        icon: <FaBookJournalWhills />,
        submenu:  false
      }
     ]
   }
]

const MenuOptionswithoutHeading = [
  
  
      {
        title: "Dashboard",
        path: "/Company/Dashboard",
        icon: <FaHome size={20} />,
        submenu:  false
      },
   {
        title: "Ledgers",
        path: "/Company/Ledgers",
        icon: <FaBookJournalWhills size={20} />,
        submenu: [
          {
            path: "/Company/Ledgers/Ledger_Create",
            title: "Create Ledger",
            icon :  <SiHyperledger size={15} />  
          },
          {
            path: "/Company/Ledgers/Ledger_Details",
            title: "Display Ledger Details",
            icon :  <SiHyperledger size={15} />  
          }
        ]
  },
  {
    title: "Journal",
    path: "/Company/Journal-Entries",
    icon: <FaBookJournalWhills size={20} />,
    submenu: [
      {
        path: "/Company/Journal/Journal_Entry_Creation",
        title: "Create Journal Entry",
        icon :  <SiHyperledger size={15} />  
      },
    ]
}
]

const Sidebar = ({children}) => {

  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const inputAnimation =  {
    hidden:{
      width: 0,
      padding: 0,
      opacity: 0
    },
    show : {
      width: "140px",
      padding: '5px 15px',
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  const pathname = usePathname();

  const showAnimation =  {
    hidden:{
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    show : {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  // console.log(pathname);
  return (
    <>  
    <div>
      <motion.div animate={{width: "260px", transition:{
        duration: 0.5,
        type: "spring",
        damping: 11
      }}} className='sidebar'>
        <div className='top_section'>
          <AnimatePresence>
            <motion.h1 initial='hidden' animate='show' exit='hidden' variants={showAnimation} className='logo'>{process.env.API_NAME}</motion.h1>
          </AnimatePresence>
          <div className='bars'>
            <FaBars onClick={toggle} style={{pointer: 'cursor'}}/>
          </div>
        </div>
        <hr/>
        <div className='search'>
          <div className='search_icon'>
            <BiSearch />
          </div>
          <AnimatePresence>
            <motion.input initial='hidden' animate='show' exit='hidden' variants={inputAnimation} placeholder='Search...' className='search_input'/>
          </AnimatePresence>
        </div>
        <section className='routes'>
          {MenuOptionswithoutHeading.map((route, index) => {
             if (route.submenu) {
              return (
                <SidebarMenu showAnimation={showAnimation} isOpen={isOpen} route={route} key={route.title} setIsOpen={setIsOpen} />
              );
            }

            return(
            <Link  href={route.path} key={index} className={pathname===route.path ? 'links active' : 'links'}>
               <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.title}
                      </motion.div>
                  </AnimatePresence>
            </Link>
            )
          })}
        </section>
      </motion.div>
      {/* <Dashboardview isOpen={isOpen} /> */}
    </div>
    </>
  )
}
  
 
export default Sidebar;