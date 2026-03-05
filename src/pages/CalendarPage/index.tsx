import { CalendarProvider } from '@/contexts/CalendarContext';
import { Settings } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChangeBadgeVariantInput } from '@/components/calendar/components/ChangeBadgeVariantInput';
import { ChangeVisibleHoursInput } from '@/components/calendar/components/ChangeVisibleHoursInput';
import { ChangeWorkingHoursInput } from '@/components/calendar/components/ChangeWorkingHoursInput';

import { CALENDAR_ITEMS_MOCK, USERS_MOCK } from '@/components/calendar/mocks';
import { ClientContainer } from '@/components/calendar/components/ClientContainer';
import { useState } from 'react';
import { CALENDAR_VIEW, type CalendarView } from '@/types/enums';
import { Button } from '@/components/ui/button';

const CalendarPage = () => {
    const users = USERS_MOCK;

    const events = CALENDAR_ITEMS_MOCK;

    const [currentView, setCurrentView] = useState<CalendarView>(CALENDAR_VIEW.WEEK);

    return (
        <>
            <Button onClick={() => setCurrentView(CALENDAR_VIEW.WEEK)}>Change to Week</Button>
            <Button onClick={() => setCurrentView(CALENDAR_VIEW.MONTH)}>Change to Month</Button>
            <Button onClick={() => setCurrentView(CALENDAR_VIEW.LIST)}>Change to List</Button>

            <CalendarProvider users={users} events={events}>
                <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-8 py-4">
                    <ClientContainer view={currentView} />

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-none">
                            <AccordionTrigger className="flex-none gap-2 py-0 hover:no-underline">
                                <div className="flex items-center gap-2">
                                    <Settings className="size-4" />
                                    <p className="text-base font-semibold">Calendar settings</p>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent>
                                <div className="mt-4 flex flex-col gap-6">
                                    <ChangeBadgeVariantInput />
                                    <ChangeVisibleHoursInput />
                                    <ChangeWorkingHoursInput />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </CalendarProvider>
        </>
    );
};

export default CalendarPage;
