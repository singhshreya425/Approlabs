import React from 'react'
import pie2 from '../../assets/pie2.jpeg'

const GraphsChart = () => {
  return (
    <div >
              <div className='pb-8'>
            <p className='text-2xl font-bold inline border-b-4
            border-gray-500'>Current Subject</p>
        </div>
      <img className='h-[600px] w-[800px] cursor-pointer' src={pie2} alt={pie2} />
    </div>
  )
}

export default GraphsChart
