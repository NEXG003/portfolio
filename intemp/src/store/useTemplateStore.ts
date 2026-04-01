import { create } from 'zustand'

export type Clip = {
    id: string
    type: 'video' | 'image' | 'text' | 'audio'
    src?: string
    text?: string
    start: number
    end: number
}

export type Template = {
    id: string
    title: string
    description?: string
    clips: Clip[]
}

type State = {
    templates: Template[]
    selectedTemplate?: Template
    timeline: Clip[]
    setTemplates: (templates: Template[]) => void
    selectTemplate: (template: Template) => void
    setTimeline: (timeline: Clip[]) => void
}

export const useTemplateStore = create<State>((set) => ({
    templates: [],
    selectedTemplate: undefined,
    timeline: [],
    setTemplates: (templates) => set({ templates }),
    selectTemplate: (template) => set({ selectedTemplate: template, timeline: template.clips || [] }),
    setTimeline: (timeline) => set({ timeline }),
}))
