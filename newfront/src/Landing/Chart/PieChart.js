import React from 'react'
import Pie from  '../../assets/Pie.jpeg'

const PieChart = () => {
  return (
    <div >
              <div className='pb-8'>
            <p className='text-2xl font-bold inline border-b-4
            border-gray-500'>Current Visits</p>
        </div>
      <img className='h-[500px] w-[800px] cursor-pointer' src={Pie} alt={Pie} />
    </div>
  )
}

export default PieChart
