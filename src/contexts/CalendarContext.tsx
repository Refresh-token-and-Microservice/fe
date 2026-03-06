import { createContext, useContext } from 'react';

import type { Dispatch, SetStateAction } from 'react';
import type { Event, User } from '@/interfaces/calendarInterfaces';
import type { BadgeVariant, CalendarView, VisibleHours, WorkingHours } from '@/types/calendarEnums';

interface ICalendarContext {
    selectedView: CalendarView;
    setSelectedView: (view: CalendarView) => void;
    selectedDate: Date;
    setSelectedDate: (date: Date | undefined) => void;
    selectedUserId: User['id'] | 'all';
    setSelectedUserId: (userId: User['id'] | 'all') => void;
    badgeVariant: BadgeVariant;
    setBadgeVariant: (variant: BadgeVariant) => void;
    users: User[];
    workingHours: WorkingHours;
    seWorkingHours: Dispatch<SetStateAction<WorkingHours>>;
    visibleHours: VisibleHours;
    seVisibleHours: Dispatch<SetStateAction<VisibleHours>>;
    events: Event[];
    setLocalEvents: Dispatch<SetStateAction<Event[]>>;
}

export const CalendarContext = createContext({} as ICalendarContext);

export const WORKING_HOURS = {
    0: { from: 0, to: 0 },
    1: { from: 8, to: 17 },
    2: { from: 8, to: 17 },
    3: { from: 8, to: 17 },
    4: { from: 8, to: 17 },
    5: { from: 8, to: 17 },
    6: { from: 8, to: 12 },
};

export const VISIBLE_HOURS = { from: 7, to: 18 };

export function useCalendar(): ICalendarContext {
    const context = useContext(CalendarContext);
    if (!context) throw new Error('useCalendar must be used within a CalendarProvider.');
    return context;
}
