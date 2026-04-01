import React from 'react'

export type Template = {
    id: string
    title: string
    description?: string
}

type Props = {
    template: Template
}

export default function TemplateCard({ template }: Props) {
    return (
        <div className="p-4 bg-white shadow rounded">
            <div className="h-40 bg-gray-200 mb-2 flex items-center justify-center">Placeholder Video</div>
            <h3 className="font-semibold">{template.title}</h3>
            <p className="text-sm text-gray-600">{template.description}</p>
        </div>
    )
}
