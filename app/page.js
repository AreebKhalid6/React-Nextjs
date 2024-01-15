"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react'

const page = () => {
  const [marks,setMarks] = useState(80);
  const [user,setUsers] = useState("USA");
  return (
    <>
    <Header user={user} />
    {user}
    <h1 className='bg-red underline'>Hello {marks}</h1>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className='text-2xl' onClick={() => {
      setMarks(33);
    }}>Hello</button>
 
    <Footer/>
    </>
  )
}

export default page
