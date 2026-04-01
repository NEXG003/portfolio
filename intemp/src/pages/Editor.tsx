import React from 'react'
import VideoPreview from '../components/VideoPreview'
import Timeline from '../components/Timeline'
import { useTemplateStore } from '../store/useTemplateStore'

export default function Editor() {
    const timeline = useTemplateStore((s) => s.timeline)
    const setTimeline = useTemplateStore((s) => s.setTimeline)

    function addClip(type: 'video' | 'image' | 'text' | 'audio') {
        // Placeholder: add a dummy clip
        const id = Math.random().toString(36).slice(2)
        setTimeline([
            ...timeline,
            {
                id,
                type,
                src: type === 'audio' ? 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' : undefined, // placeholder audio
                text: type === 'text' ? 'Sample Text' : undefined,
                start: 0,
                end: 5,
            },
        ])
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 flex flex-col gap-4">
                <div className="flex gap-2 mb-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => addClip('video')}>+ Video</button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => addClip('image')}>+ Image</button>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => addClip('text')}>+ Text</button>
                    <button className="bg-purple-500 text-white px-3 py-1 rounded" onClick={() => addClip('audio')}>+ Audio</button>
                </div>
                <VideoPreview />
            </div>
            <div>
                <Timeline />
            </div>
        </div>
    )
}
