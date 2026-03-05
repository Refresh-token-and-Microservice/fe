export const CALENDAR_VIEW = {
    WEEK: 'week',
    MONTH: 'month',
    LIST: 'agenda',
} as const;

export type CalendarView = (typeof CALENDAR_VIEW)[keyof typeof CALENDAR_VIEW];
