import React from 'react'

const Response = (props) => {
  return (
    <>
     {
     props.data  &&  (
 
        <>
        <div className=" shadow rounded-lg p-2 w-10/12 m-auto h-fit flex justify-between items-center flex-col gap-2 sm:flex-row ">
        <>
            <div className="m-auto  w-full sm:w-10/12 p-2 rouded-sm h-full">
                <div className="w-56 h-56 m-auto  object-fill ">
                    <img
                        className="block m-auto h-full w-full
object-contain object-center rounded"
                        src={props.data.URL}
                        alt="selected"
                    />
                </div>

                <div className="info w-full p-1 mt-3 ">
                    <ul className="font-semibold font-mono w-fit border pl-2 pr-2 bg-yellow-500 rounded text-black shadow-md">
                        <li>Size: {props.data.size} </li>
                        <li>Type: {props.data.type} </li>
                    </ul>
                </div>
            </div>
            <div className="sm:w-1/5 w-full h-full flex justify-center items-center  flex-col gap-4">
                <button
                    className="text-lg block m-auto  font-semibold font-serif p-3 bg-blue-600 hover:bg-blue-800 transition-all duration-100 ease-in-out pl-8 pr-8 rounded-2xl text-white  "
                    // onClick={handleImageUpload}
                >
                    Download
                </button>

                <button
                    className="text-lg block m-auto  font-semibold font-serif p-3 bg-blue-600 hover:bg-blue-800 transition-all duration-100 ease-in-out pl-8 pr-8 rounded-2xl text-white  "
                    onClick={()=>{
                        window.navigator.clipboard.writeText(props.data.url)
                    }}
                >
                    copy
                </button>
            </div>
        </>
    </div>
        </>
     )
    }
    </>
   
  )
}

export default Response