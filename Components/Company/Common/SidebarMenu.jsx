'use client'
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarMenu = ({showAnimation, route, isOpen, setIsOpen }) => {

    const MenuAnimation =  {
        hidden:{
          height: 0,
          opacity: 0,
          transition: {
            duration: 0.3,
            when: "afterChildren"
          }
        },
        show : {
          height: 'auto',
          opacity: 1,
          transition: {
            duration: 0.3,
            when: "beforeChildren"
          }
        }
      }
    
    const pathname = usePathname();
    const [isMenuOpen, SetisMenuOpen] = useState(false);
    const toggleMenu = () => {
        SetisMenuOpen(!isMenuOpen);
        setIsOpen(true);
    }

    useEffect(() => {
        if (!isOpen){
            SetisMenuOpen(false);
        }
    },[isOpen])
    
    const MenuItemAnimation =  {
        hidden: (index) => ({
          padding:0,
          x:"-100%",
          transition: {
            duration: (index+1)*0.3
          }
        }),
        show : (index) => ({
          x:0,
          transition: {
            duration: (index+1)*0.3
          }
        })
      }

    return ( 
        <>
        <div className='menu' onClick={toggleMenu}>
        <div className='menu-item'>
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
          </div>
          <motion.div animate={isMenuOpen ? {rotate:-90} : {rotate: 0}}>
            <FaAngleDown />
          </motion.div>
       </div>
       <AnimatePresence>
       {isMenuOpen && 
       <motion.div  variants={MenuAnimation}
       initial="hidden"
       animate="show"
       exit="hidden"
       className='menu_container'>
       {route.submenu.map((subRoute,index) => (
                <motion.div      
                variants={MenuItemAnimation}
                      custom={index}
                      key={index}>
                <Link  href={subRoute.path} key={index} className={pathname===subRoute.path ? 'linkforsub active' : 'linkforsub'}>
             <div className="icon">{subRoute.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="link_text"
                    >
                      {subRoute.title}
                    </motion.div>
                  )}
                    </AnimatePresence>
                    </Link>
                </motion.div>
          ))}
          </motion.div>}
       </AnimatePresence>
       </>
     );
}
 
export default SidebarMenu;