export interface IAPIGateway {
    Get: <T>(path: string) => Promise<T>;
}