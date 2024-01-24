import React from 'react'

const MyGallery = ({displayImg}) => {
  return (
    <div >
        <div className='h-screen text-white w-full bg-gradient-to-b from-black to-gray-800'>
            <h2 className='font-bold text-4xl text-center p-4'>My Gallery</h2>
           <div className='grid grid-cols-3 '>
             {
                displayImg.map((img , i )=>(
                    <img src={img} key={i} alt='gallery' />
                ))
             }
           </div>
        </div>
    </div>
  )
}

export default MyGallery
