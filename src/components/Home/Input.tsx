'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { LiaTruckPickupSolid } from "react-icons/lia";
import { FaEyeDropper } from "react-icons/fa";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import GooglePlacesAutocompleteProps from 'react-google-places-autocomplete/build/types';

const Input = (props: any) => {
    const [value, setValue] = useState<any>(null)
    const [mounted, setMounted] = useState(false)
    const { placeholder } = props
    useEffect(() => {
        setMounted(true)
    }, []);
    const selectProps: Partial<GooglePlacesAutocompleteProps['selectProps']> = {
        value,
        onChange: setValue,
        placeholder,
        className: 'p-1 w-full text-sm border-none outline-none !bg-transparent',
        isClearable: true,
        // Remove aria props that were causing issues
        styles: {
            control: (provided: any) => ({
                ...provided,
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                '&:hover': {
                    border: 'none'
                }
            }),
            //   input: (provided:any) => ({
            //     ...provided,
            //     color: 'inherit'
            //   }),
            placeholder: (provided: any) => ({
                ...provided,
                color: '#6B7280'
            }),
        },
        components: {
            DropdownIndicator: () => null,
            // IndicatorSeparator: () => null,
            // ClearIndicator: () => null,
            // SingleValue: () => null
        }
    }

    return (
        <div className=' bg-slate-200 flex gap-2 items-center mb-3 border-[2px] border-gray-200 rounded-lg p-1 pl-3'>
            {placeholder === 'Pickup Location' ? <LiaTruckPickupSolid className='' /> : <FaEyeDropper className='' />}
            {/* <input type='text' placeholder={placeholder} className='p-1 w-full text-sm border-none outline-none bg-transparent' /> */}
            {
                mounted && <GooglePlacesAutocomplete
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
                    selectProps={selectProps}
                />
            }
        </div>
    )
}

export default Input