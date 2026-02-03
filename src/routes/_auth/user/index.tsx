import { createFileRoute } from '@tanstack/react-router';
import UserPage from '@/pages/UserPage';
import { queryClient } from '@/lib/queryClient';
import { usersQueryOptions } from '@/hooks/user/useUsers';

export const Route = createFileRoute('/_auth/user/')({
    loader: () => queryClient.ensureQueryData(usersQueryOptions),
    component: UserPage,
});
