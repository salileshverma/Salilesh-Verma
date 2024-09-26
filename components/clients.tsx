import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { achievements } from '@/data'

const clients = () => {
  return (
    <div className="py-20" id="achievements">
       <h1 className="heading">
            A quick glimpse of 
            <span className="text-purple"> small achievements</span> 
       </h1>
       <div className="flex flex-col items-center max-lg:mt-10 mt-16">
        <InfiniteMovingCards 
        items={achievements}
        direction="right"
        speed="slow"
        />
        
       </div>
       </div>
  )
}

export default clients