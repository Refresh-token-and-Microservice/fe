import { z } from 'zod';

export const infoProvideSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    phone: z.string().min(1, 'Phone number is required'),
});

export type InfoProvideFormValues = z.infer<typeof infoProvideSchema>;
