import { demoService } from '@/services/DemoService';
import { useMutation } from '@tanstack/react-query';

export const useAdmin = () => {
    const { mutate: mutateAdmin, ...rest } = useMutation({
        mutationFn: () => demoService.admin(),

        onSuccess: () => {
            alert('Admin');
        },

        onError: (error: Error) => {
            console.log('Error', error);
        },
    });

    return { mutateAdmin, ...rest };
};
