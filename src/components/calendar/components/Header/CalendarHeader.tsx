/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from '@tanstack/react-router';
import { Columns, Grid3x3, List, Plus, Grid2x2, CalendarRange } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { UserSelect } from '@/components/calendar/components/Header/UserSelect';
import { TodayButton } from '@/components/calendar/components/Header/TodayButton';
import { DateNavigator } from '@/components/calendar/components/Header/DateNavigator';
import { AddEventDialog } from '@/components/calendar/components/Dialogs/AddEventDialog';

import type { IEvent } from '@/components/calendar/interfaces';
import type { TCalendarView } from '@/components/calendar/types';

interface IProps {
    view: TCalendarView;
    events: IEvent[];
}

export function CalendarHeader({ view, events }: IProps) {
    return (
        <div className="flex flex-col gap-4 border-b p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
                <TodayButton />
                <DateNavigator view={view} events={events} />
            </div>

            <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:justify-between">
                <div className="flex w-full items-center gap-1.5">
                    <div className="inline-flex first:rounded-r-none last:rounded-l-none [&:not(:first-child):not(:last-child)]:rounded-none">
                        <Button
                            asChild
                            aria-label="View by day"
                            size="icon"
                            variant={view === 'day' ? 'default' : 'outline'}
                            className="rounded-r-none [&_svg]:size-5"
                        >
                            <Link to={'/day-view' as any}>
                                <List strokeWidth={1.8} />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            aria-label="View by week"
                            size="icon"
                            variant={view === 'week' ? 'default' : 'outline'}
                            className="-ml-px rounded-none [&_svg]:size-5"
                        >
                            <Link to={'/week-view' as any}>
                                <Columns strokeWidth={1.8} />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            aria-label="View by month"
                            size="icon"
                            variant={view === 'month' ? 'default' : 'outline'}
                            className="-ml-px rounded-none [&_svg]:size-5"
                        >
                            <Link to={'/month-view' as any}>
                                <Grid2x2 strokeWidth={1.8} />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            aria-label="View by year"
                            size="icon"
                            variant={view === 'year' ? 'default' : 'outline'}
                            className="-ml-px rounded-none [&_svg]:size-5"
                        >
                            <Link to={'/year-view' as any}>
                                <Grid3x3 strokeWidth={1.8} />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            aria-label="View by agenda"
                            size="icon"
                            variant={view === 'agenda' ? 'default' : 'outline'}
                            className="-ml-px rounded-l-none [&_svg]:size-5"
                        >
                            <Link to={'/agenda-view' as any}>
                                <CalendarRange strokeWidth={1.8} />
                            </Link>
                        </Button>
                    </div>

                    <UserSelect />
                </div>

                <AddEventDialog>
                    <Button className="w-full sm:w-auto">
                        <Plus />
                        Add Event
                    </Button>
                </AddEventDialog>
            </div>
        </div>
    );
}
