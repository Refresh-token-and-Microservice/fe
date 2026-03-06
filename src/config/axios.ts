import axios, { type AxiosRequestConfig, type AxiosError } from 'axios';
import { LOGOUT_EVENT_NAME } from '@/utils/constant';

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    skipAuth?: boolean;
    _retry?: boolean;
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8888/',
    headers: {
        'Content-Type': 'application/json',
        common: {},
    },
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig;

        const isUnauthorized = error.response?.status === 401 || error.response?.status === 403;

        if (isUnauthorized && originalRequest && !originalRequest._retry && originalRequest.url !== '/auth/refresh-token') {
            originalRequest._retry = true;

            try {
                await instance.post('/auth/refresh-token');

                return instance(originalRequest);
            } catch (refreshError) {
                console.log('Refresh token expired or failed. Logging out...');

                window.dispatchEvent(new CustomEvent(LOGOUT_EVENT_NAME));

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error instanceof Error ? error : new Error(String(error)));
    },
);

export default instance;
