"use client"
import React, { useEffect , useState} from 'react'
import PlaygroundHeader from '../_components/PlaygroundHeader'
import ChatSection from '../_components/ChatSection'
import WebsiteDesign from '../_components/WebsiteDesign'
import ElementSettingSection from '../_components/ElementSettingSection'
import { useParams, useSearchParams } from 'next/navigation'
import axios from 'axios'

export type Messages = {
    role: string,
    content: string
}

export type Frame = {
    projectId: string,
    frameId: string,
    designCode: string,
    chatMessages: Messages[]
}


function Playground() {
    const {projectId} = useParams();
    const params = useSearchParams();
    const frameId = params.get('frameId');
    const [frameDetail, setFrameDetail] = useState<Frame | null>(null);

    useEffect(() => {
        frameId && GetFrameDetails();
    }, [frameId])

    const GetFrameDetails = async () => {
        const result = await axios.get('/api/frames?frameId='+frameId+"&projectId="+projectId);
        console.log(result.data)
        setFrameDetail(result.data);
    }

  return (
    <div>
        <PlaygroundHeader/>
        <div className='flex'>
            {/* chatsection */}
            <ChatSection messages={frameDetail?.chatMessages ?? []}/>

            {/* websitedesign */}
            <WebsiteDesign/>

            {/* setting section  */}
            {/* <ElementSettingSection/> */}
        </div>
    </div>
  )
}

export default Playground