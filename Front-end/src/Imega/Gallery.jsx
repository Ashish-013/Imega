import React from 'react'

const Gallery = (props) => {
  return (
    <>
     <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-full flex-wrap">

    {
      props.data && props.data.map((e,i)=>{
        return (

          <div className={`${(i+1)%3===0 ? 'w-full':'w-1/2'} p-1 md:p-2`}>
          <img key={e.url}
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={e.url}/>
        </div>

        )
      })
    }
   

    
    </div>
   
  </div>
</div>
    </>
  )
}

export default Gallery