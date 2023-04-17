import React from 'react'
import Line from '../../assets/Line.jpeg'


const LineChart = () => {

  return (
    <div className=''>
              <div className='pb-8'>
            <p className='text-2xl font-bold inline border-b-4
            border-gray-500'>Website Visits</p>
        </div>
      <img className='h-[600px] w-[800px] cursor-pointer' src={Line} alt={Line} />
    </div>
  );
}

export default LineChart
