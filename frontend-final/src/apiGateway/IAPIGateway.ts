export interface IAPIGateway {
    Get: <T>(path: string) => Promise<T>;
    Post: <T>(path: string, requestBody: T) => Promise<number>;
    Delete: <T>(path: string) => Promise<void>;
}