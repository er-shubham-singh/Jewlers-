import React from 'react'

function BootomCard() {
  return (
    <div>
        <div className="  bottom-3 lg:right-[25%] l  z-10  fixed  bg-white lg:w-1/2 mx-auto  rounded-2xl shadow-2xl">
            <div className="flex   justify-evenly   ">
              <div className='lg:block hidden'>
                <p className="text-md px-5 py-3 w-full ">₹49 593</p>
              </div>
              <div className="w-3/6 px-3 lg:block hidden ">
                <select name="" id="" className=" w-[80%] border-none text-lg px-3 py-3 rounded-2xl">
                  <option value=" " className="">Weight:5.255g</option>
                </select>
              </div>
              <div className=''>
                <button className="text-md bg-amber-700 px-5 py-3 rounded-4xl lg:w-full w-screen ">Add to Card</button>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default BootomCard