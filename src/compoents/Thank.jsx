import React from 'react'
import HBD from './HBD'

const Thank = ({ userData }) => {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
            <h3 className=' text-yellow-400'>Thank you {userData}  for the wonderful birthday wishes! Your kind words made my day extra special.</h3>
            
      </div>
    );
  };

export default Thank