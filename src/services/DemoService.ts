import { apiGet } from '@/utils/apiRequest';

class DemoService {
    async logout(): Promise<string> {
        const { result } = await apiGet<string>('/demo');

        return result;
    }
}

export const demoService = new DemoService();
