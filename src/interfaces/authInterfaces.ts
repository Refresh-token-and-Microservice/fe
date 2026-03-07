export interface LoginDataResponse {
    id: number;
    email: string;
    roles: string[];
    status: string;
    disabled: boolean;
    disableAt: string;
    firstName: string;
    lastName: string;
    phone: string;
}

export type RegisterDataResponse = LoginDataResponse;
