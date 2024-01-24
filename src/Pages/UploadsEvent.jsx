import React, { useState, useCallback } from 'react';

const UploadsEvent = ({ onImageUpload }) => {
  const [imagesUrl, setImagesUrl] = useState([]);

  const handleChange = ((e) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
          const imageDataUrl = readerEvent.target.result;
          onImageUpload(imageDataUrl);
          setImagesUrl((prevImages) => [...prevImages, imageDataUrl]);
        };
        reader.readAsDataURL(file);
      }
    })

  return (
    <div>
        <input onChange={handleChange} type="file"  />
        <div className='grid grid-cols-3 gap-2 items-center '>
           {
            imagesUrl.map((image_url , i)=>(
                <img src={image_url} key={i} alt='upload' className=' h-3/4 w-3/4 object-cover shadow-lg' />
             ))
             }
        </div>
    </div>
  )
  }


export default UploadsEvent


