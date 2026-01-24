export type LoginDataRequest = {
    email: string;
    password: string;
};

export type LoginDataResponse = {
    id: number;
    email: string;
    password: string;
};

export type RegisterDataRequest = LoginDataRequest;
export type RegisterDataResponse = LoginDataResponse;
