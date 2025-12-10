import React from 'react'
import Image from 'next/image'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const MenuOptions = [
    {
        name: 'Pricing',
        path: '/pricing'
    },
    {
        name: 'Contact us',
        path: '/contact-us'
    }
]

function Header() {
  return (
    <div className='flex items-center justify-between p-4 shadow-md'>
        {/* {logo} */}
        <div className='flex gap-2 items-center'>
            <Image src="/logo.svg" alt="Logo" width={35} height={35} />
            <h2 className='font-bold text-xl'>AI Website Generator</h2>
        </div>
        {/* {menu options} */}
        <div className='flex gap-4'>
            {MenuOptions.map((menu, index) => (
                <Button variant={"ghost"} key={index}>{menu.name}</Button>
            ))}
        </div>

        {/* {get started button} */}
        <Button>Get Started <ArrowRight/></Button>
    </div>
  )
}

export default Header