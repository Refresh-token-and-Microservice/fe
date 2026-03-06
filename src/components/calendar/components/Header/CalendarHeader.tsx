import { Columns, Grid3x3, Plus, Grid2x2, CalendarRange } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { UserSelect } from '@/components/calendar/components/Header/UserSelect';
import { TodayButton } from '@/components/calendar/components/Header/TodayButton';
import { DateNavigator } from '@/components/calendar/components/Header/DateNavigator';
import { AddEventDialog } from '@/components/calendar/components/Dialogs/AddEventDialog';

import type { Event } from '@/interfaces/calendarInterfaces';
import type { CalendarView } from '@/types/calendarEnums';
import { useCalendar } from '@/contexts/CalendarContext';
import { CALENDAR_VIEW } from '@/types/calendarEnums';

interface IProps {
    view: CalendarView;
    events: Event[];
}

export function CalendarHeader({ view, events }: IProps) {
    const { setSelectedView } = useCalendar();

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
                            aria-label="View by week"
                            size="icon"
                            variant={view === 'week' ? 'default' : 'outline'}
                            className="rounded-r-none [&_svg]:size-5"
                        >
                            <div
                                onClick={() => {
                                    setSelectedView(CALENDAR_VIEW.WEEK);
                                }}
                            >
                                <Columns strokeWidth={1.8} />
                            </div>
                        </Button>

                        <Button
                            asChild
                            aria-label="View by month"
                            size="icon"
                            variant={view === 'month' ? 'default' : 'outline'}
                            className="-ml-px rounded-none [&_svg]:size-5"
                        >
                            <div
                                onClick={() => {
                                    setSelectedView(CALENDAR_VIEW.MONTH);
                                }}
                            >
                                <Grid2x2 strokeWidth={1.8} />
                            </div>
                        </Button>

                        <Button
                            asChild
                            aria-label="View by year"
                            size="icon"
                            variant={view === 'year' ? 'default' : 'outline'}
                            className="-ml-px rounded-none [&_svg]:size-5"
                        >
                            <div
                                onClick={() => {
                                    setSelectedView(CALENDAR_VIEW.YEAR);
                                }}
                            >
                                <Grid3x3 strokeWidth={1.8} />
                            </div>
                        </Button>

                        <Button
                            asChild
                            aria-label="View by agenda"
                            size="icon"
                            variant={view === 'agenda' ? 'default' : 'outline'}
                            className="-ml-px rounded-l-none [&_svg]:size-5"
                        >
                            <div
                                onClick={() => {
                                    setSelectedView(CALENDAR_VIEW.LIST);
                                }}
                            >
                                <CalendarRange strokeWidth={1.8} />
                            </div>
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
