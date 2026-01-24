import { authService } from '@/services/AuthService';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: () => authService.logout(),

        onSuccess: () => {
            navigate('/login');
            localStorage.removeItem('IS_LOGIN');
        },

        onError: (error: Error) => {
            console.log(error);
        },
    });

    return { mutate, isPending };
};
