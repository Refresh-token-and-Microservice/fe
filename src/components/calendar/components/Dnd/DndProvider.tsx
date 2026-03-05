import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { CustomDragLayer } from '@/components/calendar/components/Dnd/CustomDragLayer';

interface DndProviderWrapperProps {
    children: React.ReactNode;
}

export function DndProviderWrapper({ children }: DndProviderWrapperProps) {
    return (
        <DndProvider backend={HTML5Backend}>
            {children}
            <CustomDragLayer />
        </DndProvider>
    );
}
