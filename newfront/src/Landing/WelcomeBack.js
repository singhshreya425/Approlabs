import React from 'react'
import Micro from '../assets/Micro.jpeg'
import Bettle from '../assets/Bettle.jpeg'
import Apple from '../assets/Apple.jpeg'
import Android from '../assets/Android.jpeg'

const WelcomeBack = () => {
    const portfolio = [
        {
            id : 1,
            src : Android,
            number : '714k',
            text : "weekly Sales"
        },
        {
            id : 2,
            src : Apple,
            number : '1.35m',
            text : "New User"
        },
        {
            id : 3,
            src : Micro,
            number : '1.72m',
            text : "Item Orders"
        },
        {
            id : 4,
            src : Bettle,
            number : '234',
            text : "Bug Reports"
        },
    ]
  return (
    <div name='portfolio' className='w-full text-black '>
      <div className=' p-4 mx-auto flex flex-col justify-center
      w-full '>
        <div className='pb-8'>
            <p className='text-3xl font-bold
            border-gray-500 m-10'>Hi,Welcome back</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8
         sm:px-0'>
            { portfolio.map(({id , src  , number , text })=>
              <div key={id} className='shadow-md shadow-gray-400 rounded-lg px-20'>
              <img src={src} alt='' className='rounded-md duration-200
              hover:scale-105' />
              <div className=' flex flex-col items-center justify-center'>
                <button className=' text-2xl w-1/2  m-2 duration-200 hover:scale-105'>{number}</button> 
                <button className=' text-xl  m-2 duration-200 hover:scale-105'>{text}</button>
              </div>
              </div> )}
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBack
