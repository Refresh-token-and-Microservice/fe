import type { EventColor } from '@/types/calendarEnums';
import type { GetAllUserItem } from './userInterfaces';

export interface Event {
    id: number;
    startDate: string;
    endDate: string;
    title: string;
    color: EventColor;
    description: string;
    user: GetAllUserItem;
}

export interface CalendarCell {
    day: number;
    currentMonth: boolean;
    date: Date;
}
