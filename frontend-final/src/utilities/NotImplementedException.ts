export class NotImplementedException extends Error {
    constructor() {
        super(`Method not implemented!`);
    }
}