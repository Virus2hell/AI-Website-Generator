import React from 'react'
import PlaygroundHeader from '../_components/PlaygroundHeader'
import ChatSection from '../_components/ChatSection'
import WebsiteDesign from '../_components/WebsiteDesign'
import ElementSettingSection from '../_components/ElementSettingSection'

function Playground() {
  return (
    <div>
        <PlaygroundHeader/>
        <div className='flex'>
            {/* chatsection */}
            <ChatSection/>

            {/* websitedesign */}
            <WebsiteDesign/>

            {/* setting section  */}
            <ElementSettingSection/>
        </div>
    </div>
  )
}

export default Playground