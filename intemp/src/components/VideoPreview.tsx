import React, { useRef, useState } from 'react'
import { useTemplateStore } from '../store/useTemplateStore'
// @ts-expect-error: ffmpeg.wasm types
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import { Howl } from 'howler'

export default function VideoPreview() {
    const timeline = useTemplateStore((s) => s.timeline)
    const [exporting, setExporting] = useState(false)
    const [progress, setProgress] = useState(0)
    const [audio, setAudio] = useState<Howl | null>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Placeholder: play first audio clip if present
    function handleAudioPreview() {
        const audioClip = timeline.find((c) => c.type === 'audio' && c.src)
        if (audioClip && audioClip.src) {
            if (audio) audio.stop()
            const howl = new Howl({ src: [audioClip.src] })
            setAudio(howl)
            howl.play()
        }
    }

    // Placeholder: export using ffmpeg.wasm (mocked)
    async function handleExport() {
        setExporting(true)
        setProgress(0.1)
        // TODO: Compose video from timeline using ffmpeg.wasm
        // This is a placeholder for demo purposes
        await new Promise((r) => setTimeout(r, 2000))
        setProgress(1)
        setExporting(false)
        alert('Export complete! (placeholder)')
    }

    return (
        <div className="p-4 bg-black rounded text-white flex flex-col items-center justify-center gap-4" style={{ height: 480 }}>
            <div className="w-full flex-1 flex items-center justify-center">
                {/* Placeholder: show first video/image/text clip visually */}
                {timeline.length === 0 ? (
                    <div className="text-gray-400">No clips in timeline</div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="bg-gray-800 w-64 h-40 flex items-center justify-center rounded">
                            <span className="text-lg">{timeline[0].type.toUpperCase()}<br />[placeholder]</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex gap-2">
                <button
                    className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 disabled:opacity-50"
                    onClick={handleAudioPreview}
                    disabled={timeline.findIndex((c) => c.type === 'audio') === -1}
                >
                    Preview Audio
                </button>
                <button
                    className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700 disabled:opacity-50"
                    onClick={handleExport}
                    disabled={exporting || timeline.length === 0}
                >
                    {exporting ? `Exporting... ${Math.round(progress * 100)}%` : 'Export Reel'}
                </button>
            </div>
        </div>
    )
}
