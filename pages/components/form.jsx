import { useState } from 'react';

export default function Form({ handleSubmit, handleChange }) {
  
  return (
    <form onSubmit={handleSubmit} className='bg-[#6FE6B7] space-y-3 p-3 rounded-md w-5/6'>
    <h2 className='font-semibold'> Create Cookie Stand</h2>
    <div className="w-full">
      <label>
        <span>Location</span>
        <input className="w-full" onChange={handleChange} name="location" type="text" placeholder="Paris"/>
      </label>
    </div>

    <div className="flex flex-nowrap">
    <div className="flex flex-col">
      <label>
        <span >Minimum Customer per Hour</span>
         <input onChange={handleChange} name="min" type="text" placeholder="2"/>
        </label>
    </div>
    <div className="flex flex-col">
      <label>
        <span >Maximum Customer per Hour</span>
         <input onChange={handleChange} name="max" type="text" placeholder="7"/>
      </label>
    </div>
    <div className="flex flex-col">
      <label>
        <span >Average Cookies per Sale</span>
         <input onChange={handleChange} name="ave" type="text" placeholder="4.5"/>
      </label>
    </div>
    <div className="h-100 w-full md:w-1/4 ">
        <button className="h-full block w-full bg-emerald-500 text-sm text-gray-700  font-bold " type="submit">
          Create
        </button>
      </div>
    </div>
  </form>
  )
}
