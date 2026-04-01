import React from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { useTemplateStore } from '../store/useTemplateStore'

export default function Timeline() {
    const timeline = useTemplateStore((s) => s.timeline)
    const setTimeline = useTemplateStore((s) => s.setTimeline)

    function onDragEnd(result: DropResult) {
        if (!result.destination) return
        const items = Array.from(timeline)
        const [reordered] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reordered)
        setTimeline(items)
    }

    return (
        <div className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold mb-2">Timeline</h3>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="timeline" direction="vertical">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="h-64 bg-gray-50 border border-dashed border-gray-200 flex flex-col gap-2 overflow-y-auto p-2"
                        >
                            {timeline.length === 0 && (
                                <div className="text-gray-400 text-center my-auto">Drag clips here</div>
                            )}
                            {timeline.map((clip, idx) => (
                                <Draggable key={clip.id} draggableId={clip.id} index={idx}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="bg-white border rounded shadow p-2 flex items-center gap-2"
                                        >
                                            <span className="font-mono text-xs text-gray-500">{clip.type}</span>
                                            <span className="truncate">{clip.text || clip.src || 'Clip'}</span>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
