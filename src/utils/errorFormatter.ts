import { ValidationError } from 'joi';

interface FormattedError {
    message: string;
}

export function formatValidationErrors(error: ValidationError): FormattedError[] {
    return error.details.map(err => ({
        message: err.message.replace(/"/g, ''), // Remove double quotes from the error message
    }));
}

