import { demoService } from '@/services/DemoService';
import { useMutation } from '@tanstack/react-query';

export const useEmployee = () => {
    const { mutate: mutateEmployee, ...rest } = useMutation({
        mutationFn: () => demoService.employee(),

        onSuccess: () => {
            alert('Employee');
        },

        onError: (error: Error) => {
            console.log('Error', error);
        },
    });

    return { mutateEmployee, ...rest };
};
