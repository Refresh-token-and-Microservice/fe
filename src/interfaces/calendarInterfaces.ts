import type { EventColor } from '@/types/calendarEnums';
import type { GetAllAdminItem } from './userInterfaces';

export interface Event {
    id: number;
    startDate: string;
    endDate: string;
    title: string;
    color: EventColor;
    description: string;
    user: GetAllAdminItem;
}

export interface CalendarCell {
    day: number;
    currentMonth: boolean;
    date: Date;
}
