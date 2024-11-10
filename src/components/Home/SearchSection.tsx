import React from 'react'
import Input from './Input'

const SearchSection = () => {
    return (
        <div className='px-5 p-4 md:pd-6 rounded-xl border-[2px]'>
            <p className='font-bold text-[20px] p-2'> Get a Ride</p>
            <Input placeholder='Pickup Location' />
            <Input placeholder='Destination Location' />

            <button className='mt-2 bg-black w-full p-2 rounded-xl text-white text-bold'>Search</button>
        </div>
    )
}

export default SearchSection