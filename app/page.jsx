'use client'

import Navbar from "@/Components/Navbar";
import Navigation from "@/Components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Home() {
  
  const [text]= useTypewriter({
    words: ['Web Development'],
    loop: {},
    typeSpeed:40,
    deleteSpeed:60
  })

  const [text1]= useTypewriter({
    words: ['This is a space for maintaining financial data','This website can also be used for Financial data analysis'],
    loop: {},
    typeSpeed:60,
    deleteSpeed:90
  })

  return (
    <>
    <Navbar/>
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/main-bg.webp"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        <h1 className="text-[40px] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              {text}
            </span>
            <span style={{color:'red'}}>
              <Cursor cursorStyle="|" />
            </span>
          </h1>
          <p className="text-gray-300 hidden md:block">
            {text1}
            <span style={{color:'red'}}>
              <Cursor cursorStyle="|" />
            </span>
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
          <Link
              href="/about"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/contact"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact Us
            </Link>
           
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/about"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/contact"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact Us
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image src="/horse.png" alt="horse" height={300} width={300} className="absolute right-55 top-40"/>
        <Image src="/cliff.webp" alt="cliff" height={480} width={480}/>
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-auto">
      <Image src="/trees.webp" alt="trees" height={2000} width={2000} className="w-full h-full" />
      </div>
      <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-10 left-0 z-[10]"/>
    </main>
    <Navigation/>
    </>
  );
}
