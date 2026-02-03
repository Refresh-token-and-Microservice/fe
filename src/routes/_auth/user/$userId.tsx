import { createFileRoute } from '@tanstack/react-router';
import UserDetailPage from '@/pages/UserDetailPage';

export const Route = createFileRoute('/_auth/user/$userId')({
    component: UserDetailPage,
});
