'use client'
import React, { useEffect, useState } from 'react'
import { LiaTruckPickupSolid } from "react-icons/lia"
import { FaEyeDropper } from "react-icons/fa"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import GooglePlacesAutocompleteProps from 'react-google-places-autocomplete/build/types'

interface InputProps {
  placeholder: 'Pickup Location' | 'Destination Location'
  onChange?: (value: any) => void
  defaultValue?: any
}

const Input: React.FC<InputProps> = ({ placeholder, onChange, defaultValue }) => {
  // Use null as initial state to avoid hydration mismatch
  const [mounted, setMounted] = useState(false)
  const [value, setValue] = useState(defaultValue || null)

  // Only render the select component after mounting on client
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (newValue: any) => {
    setValue(newValue)
    onChange?.(newValue)
  }

  const selectProps: Partial<GooglePlacesAutocompleteProps['selectProps']> = {
    value,
    onChange: handleChange,
    placeholder,
    className: 'p-1 w-full text-sm border-none outline-none !bg-transparent',
    isClearable: true,
    // Remove aria props that were causing issues
    styles: {
      control: (provided:any) => ({
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
      placeholder: (provided:any) => ({
        ...provided,
        color: '#6B7280'
      })
    }
  }

  return (
    <div className="bg-slate-200 flex gap-2 items-center mb-3 border-[2px] border-gray-200 rounded-lg p-1 pl-3">
      {placeholder === 'Pickup Location' ? (
        <LiaTruckPickupSolid className="text-gray-600" />
      ) : (
        <FaEyeDropper className="text-gray-600" />
      )}
      
      {mounted && (
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
          selectProps={selectProps}
        />
      )}
    </div>
  )
}

export default Input