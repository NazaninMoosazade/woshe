import React from 'react'

function GalleryProduct() {
  return (
       <div className="flex justify-center md:justify-start">
            <a href="#">
              <img
                src="/img/img_8323.webp"
                alt="example"
                className="w-full sm:max-w-[320px] md:max-w-[380px] lg:max-w-[438px] h-auto object-cover rounded-lg shadow-md"
              />
            </a>
          </div>
  )
}

export default GalleryProduct