import { format } from 'date-fns';
import { useEffect, useState } from 'react';

interface CalendarTimelineProps {
    firstVisibleHour: number;
    lastVisibleHour: number;
}

const A_MINUTE_DURATION = 60 * 1000;

const CalendarTimeline = ({ firstVisibleHour, lastVisibleHour }: CalendarTimelineProps) => {
    const [currentTime, setCurrentTime] = useState(() => new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, A_MINUTE_DURATION);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const getCurrentTimePosition = () => {
        const minutes = currentTime.getHours() * 60 + currentTime.getMinutes();

        const visibleStartMinutes = firstVisibleHour * 60;
        const visibleEndMinutes = lastVisibleHour * 60;
        const visibleRangeMinutes = visibleEndMinutes - visibleStartMinutes;

        return ((minutes - visibleStartMinutes) / visibleRangeMinutes) * 100;
    };

    const formatCurrentTime = () => {
        return format(currentTime, 'h:mm a');
    };

    const currentHour = currentTime.getHours();
    if (currentHour < firstVisibleHour || currentHour >= lastVisibleHour) return null;

    return (
        <div
            className="pointer-events-none absolute inset-x-0 z-50 border-t border-primary"
            style={{ top: `${getCurrentTimePosition().toString()}%` }}
        >
            <div className="absolute left-0 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
            <div className="absolute -left-18 flex w-16 -translate-y-1/2 justify-end bg-background pr-1 text-xs font-medium text-primary">
                {formatCurrentTime()}
            </div>
        </div>
    );
};

export default CalendarTimeline;
