import { useDrag } from 'react-dnd';
import { useRef, useEffect } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { cn } from '@/lib/utils';

import type { IEvent } from '@/components/calendar/interfaces';

import { ItemTypes } from '@/utils/constant';

interface DraggableEventProps {
    event: IEvent;
    children: React.ReactNode;
}

export function DraggableEvent({ event, children }: DraggableEventProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.EVENT,
        item: () => {
            const width = ref.current?.offsetWidth || 0;
            const height = ref.current?.offsetHeight || 0;
            return { event, children, width, height };
        },
        collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    }));

    // Hide the default drag preview
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, [preview]);

    return (
        <div
            ref={(node) => {
                drag(node);
                ref.current = node;
            }}
            className={cn(isDragging && 'opacity-40')}
        >
            {children}
        </div>
    );
}
