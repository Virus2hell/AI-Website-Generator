'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ImagePlus, ArrowUp, LayoutDashboard, Key, HomeIcon, User } from 'lucide-react'
import { SignInButton } from '@clerk/nextjs'

const suggestions = [
    {
        label:'Dashboard',
        prompt:'Create a analytics dashboard to track customers and revenue data for a SaaS',
        icon: LayoutDashboard
    },
    {
        label:'Signup Form',
        prompt:'Create a modern signup form with email and password fields, Google and Github login options and terms checkbox',
        icon: Key
    },
    {
        label: 'Hero',
        prompt: 'Create a modern header and centered hero section for a productivity SaaS, Include a badge announcement a title with a subtle gradient effect, subtle, CTA, small social proof and an image',
        icon: HomeIcon
    },
    {
        label: 'User Profile Card',
        prompt: 'Create a user profile card component for a social media website',
        icon: User
    }
]

function Hero() {

    const [userInput, setUserInput] = useState<string>()
    
  return (
    <div className='flex flex-col items-center h-[80vh] justify-center'>
        {/* Header and description  */}
        <h2 className='font-bold text-6xl'>What should we Design?</h2>
        <p className='mt-2 text-xl text-gray-500'>Generate, Edit and Explore design with AI, Export code as well</p>

        {/* input box */}
        <div className='w-full max-w-2xl p-5 border-4 mt-5 rounded-2xl'>
            <textarea placeholder='Describe your page design'
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            className='w-full h-24 focus:outline-none focus:ring-0 resize-none'
            />
            <div className='flex justify-between items-center'>
                <Button variant={"ghost"} size={'lg'}><ImagePlus /></Button>
                <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
                    <Button disabled={!userInput}><ArrowUp /></Button>
                </SignInButton>
            </div>
        </div>

        {/* suggestion */}
        <div className='mt-4 flex gap-2'>
            {suggestions.map((suggestion, index) => (
                <Button key={index} variant={'outline'}
                onClick={() => setUserInput(suggestion.prompt)}>
                    <suggestion.icon/>
                    {suggestion.label}</Button>
            ))}
        </div>
    </div>
  )
}

export default Hero