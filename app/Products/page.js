"use client"
import axios from 'axios'
import React, { useState } from 'react'

const Products = () => {  
  const [Images,setImages] = useState([])
  const getImages = async () =>{
   try {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
    const data = response.data;
    setImages(data)
  

   } catch (error) {
    console.error("Error Fetching Images");
    
   }
  }
  return (
    <>
    <h1 className='text-white font-sans bg-slate-800'>Products Images</h1>
    <button className='bg-slate-800 p-3 m-10 text-white rounded' onClick={getImages}>Get Images</button>
    <div className='p-10 text-center'>

    {Images.map((elem,i)=>{
      // <img src="elem.download_url"/>
      return<img src={elem.download_url} width={300} height={300} className='display-inline-block inline-block p-6 rounded'/>
    })}
    </div>
    </>
  )
}

export default Products
