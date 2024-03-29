import Navbar from "@/Components/Navbar";
import Navigation from "@/Components/Navigation";
import ContactForm from "@/components/ContactForm";
import React from "react";

export const metadata = {
    title: "Contact Page | FINANCIA",
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
    <>
    <Navbar/>
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-20 mt-5 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
    <Navigation/>
    </>
  );
};

export default page;