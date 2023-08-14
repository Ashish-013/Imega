import React from 'react'

const Loader = () => {
  return (
<>
<div  className="w-full h-screen flex justify-center items-center absolute top-0 left-0 ">
    <div className="mover-container w-32 p-2 border-none">
        <span className="block w-1 p-1 rounded-full loader-waiter bg-red-400"></span>

    </div>
</div>
</>
  )
}

export default Loader