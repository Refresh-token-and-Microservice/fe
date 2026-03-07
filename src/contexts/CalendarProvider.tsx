import { useState } from 'react';
import type { Event } from '@/interfaces/calendarInterfaces';
import type { BadgeVariant, CalendarView, VisibleHours, WorkingHours } from '@/types/calendarEnums';
import { CalendarContext, VISIBLE_HOURS, WORKING_HOURS } from './CalendarContext';
import { CALENDAR_VIEW } from '@/types/calendarEnums';
import { CALENDAR_ITEMS_MOCK } from '@/mocks/calendarMocks';
import type { GetAllAdminItem } from '@/interfaces/userInterfaces';

export function CalendarProvider({ children }: { children: React.ReactNode }) {
    const [badgeVariant, setBadgeVariant] = useState<BadgeVariant>('colored');
    const [visibleHours, seVisibleHours] = useState<VisibleHours>(VISIBLE_HOURS);
    const [workingHours, seWorkingHours] = useState<WorkingHours>(WORKING_HOURS);

    const [admins, setAdmins] = useState<GetAllAdminItem[]>([]);

    const [selectedView, setSelectedView] = useState<CalendarView>(CALENDAR_VIEW.WEEK);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedUserId, setSelectedUserId] = useState<GetAllAdminItem['id'] | 'all'>('all');

    const [localEvents, setLocalEvents] = useState<Event[]>(CALENDAR_ITEMS_MOCK);

    const handleSelectDate = (date: Date | undefined) => {
        if (!date) return;
        setSelectedDate(date);
    };

    return (
        <CalendarContext.Provider
            value={{
                selectedView,
                setSelectedView,
                selectedDate,
                setSelectedDate: handleSelectDate,
                selectedUserId,
                setSelectedUserId,
                badgeVariant,
                setBadgeVariant,
                admins,
                setAdmins,
                visibleHours,
                seVisibleHours,
                workingHours,
                seWorkingHours,
                events: localEvents,
                setLocalEvents,
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
}
