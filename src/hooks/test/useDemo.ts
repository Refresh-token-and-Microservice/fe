import { demoService } from '@/services/DemoService';
import { useMutation } from '@tanstack/react-query';

export const useDemo = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: () => demoService.demo(),

        onSuccess: () => {
            alert('Demo');
        },

        onError: (error: Error) => {
            console.log('Error', error);
        },
    });

    return { mutate, isPending };
};
