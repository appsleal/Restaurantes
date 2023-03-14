import { defaults } from 'joi';
import { ApiErrorMessage, StatusCode } from '../types/api.types';

class BaseError extends Error {
    statusCode: StatusCode;
    constructor(
        name: string,
        message: ApiErrorMessage,
        statusCode: StatusCode,   
    ) {
        super(message);
        this.name = name;
        this.statusCode=statusCode;

        Error.captureStackTrace(this);
    }
}

export default BaseError;