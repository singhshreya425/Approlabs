import React from 'react'
import Bar from '../../assets/Bar.jpeg'

const Barchart = () => {
  return (
    <div>
          <div className='pb-8'>
            <p className='text-2xl font-bold inline border-b-4
            border-gray-500'>Conversion rate</p>
        </div>
           <img className='h-[600px] w-[800px] cursor-pointer' src={Bar} alt={Bar} />

    </div>
  )
}

export default Barchart
