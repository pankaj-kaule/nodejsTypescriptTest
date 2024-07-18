"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValidationErrors = formatValidationErrors;
function formatValidationErrors(error) {
    return error.details.map(err => ({
        message: err.message.replace(/"/g, ''), // Remove double quotes from the error message
    }));
}
