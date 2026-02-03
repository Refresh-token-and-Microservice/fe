import { createFileRoute } from '@tanstack/react-router';
import UserDetailPage from '@/pages/UserDetailPage';
import { queryClient } from '@/lib/queryClient';
import { userQueryOptions } from '@/hooks/user/useUser';

export const Route = createFileRoute('/_auth/user/$userId')({
    loader: ({ params: { userId } }) => queryClient.ensureQueryData(userQueryOptions(userId)),
    component: UserDetailPage,
});
