import { useState } from 'react';
import type { Event, User } from '@/interfaces/calendarInterfaces';
import type { BadgeVariant, CalendarView, VisibleHours, WorkingHours } from '@/types/calendarEnums';
import { CalendarContext, VISIBLE_HOURS, WORKING_HOURS } from './CalendarContext';
import { CALENDAR_VIEW } from '@/types/calendarEnums';
import { CALENDAR_ITEMS_MOCK, USERS_MOCK } from '@/mocks/calendarMocks';

export function CalendarProvider({ children }: { children: React.ReactNode }) {
    const [badgeVariant, setBadgeVariant] = useState<BadgeVariant>('colored');
    const [visibleHours, seVisibleHours] = useState<VisibleHours>(VISIBLE_HOURS);
    const [workingHours, seWorkingHours] = useState<WorkingHours>(WORKING_HOURS);

    const [selectedView, setSelectedView] = useState<CalendarView>(CALENDAR_VIEW.WEEK);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedUserId, setSelectedUserId] = useState<User['id'] | 'all'>('all');

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
                users: USERS_MOCK,
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
