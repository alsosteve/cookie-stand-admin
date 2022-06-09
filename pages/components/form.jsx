import { useState } from 'react';

export default function Form({ submitHandler }) {
  
  return (
    <form onSubmit={submitHandler} className='bg-[#6FE6B7] py-3 pl-3 rounded-md w-5/6'>
      
      <div className="w-full">
        <label>Location</label>
        <input className="w-full"/>
      </div>

      <div className="flex flex-nowrap">
      <div className="flex flex-col">
        <label >Minimum Customer per Hour</label>
        <input/>
      </div>
      <div className="flex flex-col">
        <label >Maximum Customer per Hour</label>
        <input/>
      </div>
      <div className="flex flex-col">
        <label >Average Cookies per Sale</label>
        <input/>
      </div>
      <div className="h-100 w-full md:w-1/4 ">
          <button type="submit" className="h-full block w-full bg-emerald-500 text-gray-700  rounded-md font-bold ">
            Create
          </button>
        </div>
      </div>
      
    </form>
  )

}