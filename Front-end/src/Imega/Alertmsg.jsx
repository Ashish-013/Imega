import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const Alertmsg = (props) => {
    let[data,setdata] = useState(null)
useEffect(()=>{
    setdata({
        message: props.data.message,
        status:props.data.status,
       
    })
},[props])
    return (
        data && (
            <div className='w-full absolute top-0 left-0 p-2 animate-bounce ' style={{animationIterationCount:1}}>
            <div className={ data.status ? 'w-80 shadow-sm p-2 flex items-center bg-green-300 m-auto text-green-800':'w-80 shadow-sm p-2 flex items-center  bg-red-300 m-auto text-red-800' }>
                <span className="material-symbols-outlined ">
                   {data.status ? 'check_circle':'error'}
                </span>
                <p className="message p-1 "> {data.message} </p>
            </div>
        </div>
        )
      
    )
}

export default Alertmsg