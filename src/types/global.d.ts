declare global {
    interface ApiResponse<T> {
        status: number;
        code: string;
        message: string;
        result: T;
    }

    interface ErrorResponse {
        status: number;
        code: string;
        message: string;
        path?: string;
        fieldErrors?: Record<string, string>;
        timestamp?: number;
    }
}

export {};
