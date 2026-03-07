import { useDragLayer } from 'react-dnd';
import type { CSSProperties, ReactNode } from 'react';

import type { Event } from '@/interfaces/calendarInterfaces';

import { cn } from '@/lib/utils';

interface DragItem {
    event: Event;
    children: ReactNode;
    width: number;
    height: number;
}

const CustomDragLayer = () => {
    const { item, isDragging, currentOffset, initialOffset, initialClientOffset } = useDragLayer<{
        item: unknown;
        isDragging: boolean;
        currentOffset: { x: number; y: number } | null;
        initialOffset: { x: number; y: number } | null;
        initialClientOffset: { x: number; y: number } | null;
    }>((monitor) => ({
        item: monitor.getItem(),
        isDragging: monitor.isDragging(),
        currentOffset: monitor.getClientOffset(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        initialClientOffset: monitor.getInitialClientOffset(),
    }));

    if (!isDragging || !item || !currentOffset || !initialOffset || !initialClientOffset) {
        return null;
    }

    const dragItem = item as DragItem;

    const offsetX = initialClientOffset.x - initialOffset.x;
    const offsetY = initialClientOffset.y - initialOffset.y;

    const layerStyles: CSSProperties = {
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
        left: currentOffset.x - offsetX,
        top: currentOffset.y - offsetY,
    };

    return (
        <div style={layerStyles}>
            <div>
                <div className={cn(`w-[${dragItem.width.toString()}px]`, `h-[${dragItem.height.toString()}px]`)}>{dragItem.children}</div>
            </div>
        </div>
    );
};

export default CustomDragLayer;
