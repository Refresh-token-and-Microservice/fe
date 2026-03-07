import InformationProvidePage from '@/pages/InformationProvidePage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/infomation-provide/')({
    component: InformationProvidePage,
});
