import { standardizeError } from '../utils';

const axiosErrorHandler = (err) => {
    return standardizeError({
        message: err.message,
        httpErrorCode: err.response.status,
        errors: err.response.data,
    });
}

module.exports = axiosErrorHandler;