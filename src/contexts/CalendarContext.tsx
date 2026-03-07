import { createContext, use } from 'react';

import type { Dispatch, SetStateAction } from 'react';
import type { Event } from '@/interfaces/calendarInterfaces';
import type { BadgeVariant, CalendarView, VisibleHours, WorkingHours } from '@/types/calendarEnums';
import type { GetAllUserItem } from '@/interfaces/userInterfaces';

interface ICalendarContext {
    selectedView: CalendarView;
    setSelectedView: (view: CalendarView) => void;
    selectedDate: Date;
    setSelectedDate: (date: Date | undefined) => void;
    selectedUserId: GetAllUserItem['userId'] | 'all';
    setSelectedUserId: (userId: GetAllUserItem['userId'] | 'all') => void;
    badgeVariant: BadgeVariant;
    setBadgeVariant: (variant: BadgeVariant) => void;
    users: GetAllUserItem[];
    setUsers: Dispatch<SetStateAction<GetAllUserItem[]>>;
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
    const context = use(CalendarContext);
    return context;
}
