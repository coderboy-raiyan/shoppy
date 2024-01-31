export type IApiResponse<T> = {
    success: boolean;
    statusCode: number;
    message?: string | null;
    data?: T | null;
    meta?: {
        page: number;
        limit: number;
        total: number;
    };
};
