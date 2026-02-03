import type { User } from '@/types/UserType';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const userService = {
    getUsers: async (): Promise<User[]> => {
        const response = await axios.get<User[]>(API_URL);
        return response.data;
    },
    getUserById: async (id: string): Promise<User> => {
        const response = await axios.get<User>(`${API_URL}/${id}`);
        return response.data;
    },
};
