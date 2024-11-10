import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'
import { FaTaxi } from "react-icons/fa";

import { LuPackage } from "react-icons/lu";

const Header = () => {
    const headerMenu = [
        {
            id: 1,
            name: 'Ride',
            icon: <FaTaxi />
        },
        {
            id: 2,
            name: 'Package',
            icon: <LuPackage />
        }
    ]
    return (
        <div className='flex p-4 pb-3 pl-10 gap-7 items-center border-b-[4px] border-gray-200'>
            <div>
                <Image height={70} width={70} src='/uber.png' alt='Uber Logo' className='h-7 w-7' />
            </div>
            <div>
                <div className='flex gap-6 items-center'>
                    {headerMenu.map((item, index) => (
                        <div key={index} className='hover:text-gray-400 flex cursor-pointer gap-2 items-center'>
                            <div className='mr-2'>
                                {item.icon}
                            </div>
                            <h2 className='text-gray-700 dark:text-gray-800 font-medium text-[14px]'>
                                {item.name}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='ml-auto'>
                <UserButton />
            </div>
        </div>
    )
}

export default Header