import { demoService } from '@/services/DemoService';
import { useMutation } from '@tanstack/react-query';

export const useEmployee = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: () => demoService.employee(),

        onSuccess: () => {
            alert('Employee');
        },

        onError: (error: Error) => {
            console.log('Error', error);
        },
    });

    return { mutate, isPending };
};
