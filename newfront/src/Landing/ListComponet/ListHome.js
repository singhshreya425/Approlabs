import React from 'react'
import ITem from './ITem'
import NewsList from './NewsList'

const ListHome = () => {
  return (
    <div className='flex'>
        <NewsList/>
      <ITem/>
    </div>
  )
}

export default ListHome
