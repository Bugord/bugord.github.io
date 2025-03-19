import React, { ReactNode } from 'react'
import { Jersey_25 } from 'next/font/google'

const jeresey = Jersey_25({
  weight: '400'
});

const Section = (children: ReactNode, id: string, name: string | null = null) => {
  return (
    <div id={id} className='relative'>
      {children}
      {name && 
        <div className='bg-gray-300/40 absolute right-0 top-0 h-full w-60'>
            <div className={`[writing-mode:vertical-lr] leading-none w-full h-full uppercase text-center text-[240px] ${jeresey.className}`}>{name}</div>
        </div>
      }      
    </div>
  )
}

export default Section