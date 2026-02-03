import { demoService } from '@/services/DemoService';
import { useMutation } from '@tanstack/react-query';

export const useAdmin = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: () => demoService.admin(),

        onSuccess: () => {
            alert('Admin');
        },

        onError: (error: Error) => {
            console.log('Error', error);
        },
    });

    return { mutate, isPending };
};
