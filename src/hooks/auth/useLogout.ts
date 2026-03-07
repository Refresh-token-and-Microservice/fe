import { authService } from '@/services/AuthService';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

export const useLogout = () => {
    const navigate = useNavigate();

    const { mutate: mutateLogout, isPending } = useMutation({
        mutationFn: () => authService.logout(),

        onSuccess: () => {
            void navigate({ to: '/login' });
        },

        onError: (error: Error) => {
            console.log(error);
        },
    });

    return { mutateLogout, isPending };
};
