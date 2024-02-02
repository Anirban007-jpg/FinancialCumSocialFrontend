// "use client"

import Navbar from '@/Components/Navbar';
import Navigation from '@/Components/Navigation';
import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'
export const metadata = {
    title: "Projects Page | FINANCIA",
    description: "Managing Financial Data",
    metadataBase: new URL('http://localhost:3000/'),
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
    style={{backgroundImage: "url(/mountains.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              link={project.link}
          />
        ))}
      </div>
    </div>
    <Navigation/>
    </>
  )
}

export default page