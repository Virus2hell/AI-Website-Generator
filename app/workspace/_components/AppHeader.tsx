import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserButton } from '@clerk/nextjs';

function AppHeader() {
  return (
    <div className='flex items-center justify-between p-4 shadow'>
        <SidebarTrigger />
        <UserButton />
    </div>
  )
}

export default AppHeader