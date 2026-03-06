import { CalendarProvider } from '@/contexts/CalendarProvider';
import Calendar from './Calendar';
import { CALENDAR_ITEMS_MOCK, USERS_MOCK } from '@/mocks/calendarMocks';

const CalendarPage = () => {
    const users = USERS_MOCK;

    const events = CALENDAR_ITEMS_MOCK;

    return (
        <CalendarProvider users={users} events={events}>
            <Calendar />
        </CalendarProvider>
    );
};

export default CalendarPage;
