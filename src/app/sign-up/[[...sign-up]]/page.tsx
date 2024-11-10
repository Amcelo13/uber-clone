import { SignUp } from '@clerk/nextjs'
import UberBanner from '../../../../public/uberbanner.jpeg'
import Image from 'next/image'

export default function Page() {
  return <>
    <div>
      <div>
        <Image src={UberBanner} alt="Uber Banner" width={900} height={1000} className='object-contain h-full w-full' />
      </div>
      <div className='absolute top-10 right-10'>
        <SignUp />
      </div>
    </div>
  </>
} 