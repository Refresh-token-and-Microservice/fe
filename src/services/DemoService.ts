import { apiGet } from '@/utils/apiRequest';

class DemoService {
    async demo(): Promise<string> {
        const { result } = await apiGet<string>('/demo');

        return result;
    }

    async admin(): Promise<string> {
        const { result } = await apiGet<string>('/admin');

        return result;
    }

    async employee(): Promise<string> {
        const { result } = await apiGet<string>('/employee');

        return result;
    }
}

export const demoService = new DemoService();
