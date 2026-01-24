import axios, { type AxiosRequestConfig, type AxiosError } from 'axios';
import { LOGOUT_EVENT_NAME } from '@/utils/constant'; // Import tên sự kiện logout của bạn

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    skipAuth?: boolean;
    _retry?: boolean;
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
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

        // 1. Lỗi là 403 (Forbidden) - Backend bạn trả về khi hết hạn
        // 2. originalRequest tồn tại
        // 3. Request này chưa từng được retry (tránh lặp vô hạn)
        if (error.response?.status === 403 && originalRequest && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // BƯỚC 1: Gọi API Refresh Token
                await instance.post('/auth/refresh-token');

                // BƯỚC 2: Nếu refresh thành công (không nhảy vào catch)
                // Gọi lại request ban đầu với config cũ
                return instance(originalRequest);
            } catch (refreshError) {
                // BƯỚC 3: Nếu Refresh Token cũng hết hạn hoặc lỗi
                console.log('Refresh token expired or failed. Logging out...');

                window.dispatchEvent(new CustomEvent(LOGOUT_EVENT_NAME));

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error instanceof Error ? error : new Error(String(error)));
    },
);

export default instance;
