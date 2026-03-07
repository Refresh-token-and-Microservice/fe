import { Settings } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChangeBadgeVariantInput } from '@/components/calendar/components/ChangeBadgeVariantInput';
import { ChangeVisibleHoursInput } from '@/components/calendar/components/ChangeVisibleHoursInput';
import { ChangeWorkingHoursInput } from '@/components/calendar/components/ChangeWorkingHoursInput';

import { ClientContainer } from '@/components/calendar/components/ClientContainer';
import { useCalendar } from '@/contexts/CalendarContext';
import { useEffect } from 'react';
import { useGetAllAdmin } from '@/hooks/auth/useGetAllAdmin';

const CalendarPage = () => {
    const { selectedView, setAdmins } = useCalendar();

    const { mutateAsync } = useGetAllAdmin();

    useEffect(() => {
        const initApp = async () => {
            try {
                const adminsData = await mutateAsync();

                setAdmins(adminsData);
            } catch (error: unknown) {
                console.log('No valid session. Starting as guest.', error);
            }
        };

        initApp();
    }, [mutateAsync, setAdmins]);

    return (
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-8 py-4">
            <ClientContainer view={selectedView} />

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
    );
};

export default CalendarPage;
