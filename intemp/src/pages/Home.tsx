import React, { useEffect } from 'react'
import TemplateCard from '../components/TemplateCard'
import { useTemplateStore } from '../store/useTemplateStore'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const templates = useTemplateStore((s) => s.templates)
    const setTemplates = useTemplateStore((s) => s.setTemplates)
    const selectTemplate = useTemplateStore((s) => s.selectTemplate)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/api/templates')
            .then((res) => res.json())
            .then((data) => setTemplates(data))
    }, [setTemplates])

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Templates</h2>
            <div className="grid grid-cols-2 gap-4">
                {templates.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => {
                            selectTemplate(t)
                            navigate('/editor')
                        }}
                        className="text-left"
                    >
                        <TemplateCard template={t} />
                    </button>
                ))}
            </div>
        </div>
    )
}
