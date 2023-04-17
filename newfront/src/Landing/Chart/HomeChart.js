import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'

const HomeChart = () => {
  return (
    <div className='flex'>
      <LineChart/>
      <PieChart/>
    </div>
  )
}

export default HomeChart
