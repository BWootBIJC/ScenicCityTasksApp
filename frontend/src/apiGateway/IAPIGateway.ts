export interface IAPIGateway {
    Get: <T>(path: string) => Promise<T>;
    Post: <T>(path: string, requestBody: T) => Promise<void>;
    Delete: <T>(path: string, requestBody: T) => Promise<void>;
}