import { standardizeError } from '../utils';

const expressErrorHandler = (err) => {
   return standardizeError({
         essage: err.message,
        httpErrorCode: err.status || 500,
        errors: err.errors || 'Internal Server Error',
    });
}

module.exports = expressErrorHandler;