import React from 'react'
import Task from '../../assets/Micro.jpeg'
import facebook from '../../assets/Facebook.png'
import google from '../../assets/google.png'
import inkedin from '../../assets/linkedin.png'
import Twiter from '../../assets/twitter.png'

const TrafficeSte = () => {
    const tech = [
        {
            id : 1,
            src : facebook,
            title : "8,20K",
            text : "Facebook"
   
        },
        {
            id : 2,
            src : google,
            title : "7,2k",
            text : "Google"
        },
        {
            id : 3,
            src : inkedin,
            title : "6,2k",
            text : "linkedin"
        },
        {
            id : 4,
            src : Twiter,
            title : "4,5k",
            text : "Twitter"
        },]
  return (
    <div>
     <div name="Experience" className=' w-full
    h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center 
      w-full h-full text-black'>
        <div>
            <p className='text-2xl font-bold inline p-2 border-gray-500 border-b-4'>Traffic by Site</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center 
          py-8 px-12 sm:px-0'>
           { tech.map(({ id  , title , src , text})=>   <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 px-12 rounded-lg `}>
                <img src={src} className='w-20 mx-auto' alt=""/>
                <p className='mt-4 font-bold'>{title}</p>
                <p className='mt-4 font-bold'>{text}</p>
            </div>)}
           
        </div>
      </div>
    </div>
    </div>
  )
}

export default TrafficeSte
