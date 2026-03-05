import CalendarPage from '@/pages/CalendarPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/calendar/')({
    component: CalendarPage,
});
