import type { EventColor } from '@/types/calendarEnums';

export interface User {
    id: string;
    name: string;
    picturePath: string | null;
}

export interface Event {
    id: number;
    startDate: string;
    endDate: string;
    title: string;
    color: EventColor;
    description: string;
    user: User;
}

export interface CalendarCell {
    day: number;
    currentMonth: boolean;
    date: Date;
}
