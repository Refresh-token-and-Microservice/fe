export const CALENDAR_VIEW = {
    WEEK: 'week',
    MONTH: 'month',
    YEAR: 'year',
    LIST: 'agenda',
} as const;

export type CalendarView = (typeof CALENDAR_VIEW)[keyof typeof CALENDAR_VIEW];

export const EVENT_COLORS = {
    BLUE: 'blue',
    GREEN: 'green',
    RED: 'red',
    YELLOW: 'yellow',
    PURPLE: 'purple',
    ORANGE: 'orange',
    GRAY: 'gray',
} as const;

export type EventColor = (typeof EVENT_COLORS)[keyof typeof EVENT_COLORS];

export const BADGE_VARIANT = {
    DOT: 'dot',
    COLORED: 'colored',
    MIXED: 'mixed',
} as const;

export type BadgeVariant = (typeof BADGE_VARIANT)[keyof typeof BADGE_VARIANT];

export type WorkingHours = { [key: number]: { from: number; to: number } };
export type VisibleHours = { from: number; to: number };
