import {
    mongooseErrorHandler,
    expressErrorHandler    
} from './handlers'
import {
    standardizeError
} from './utils'
import {
    CustomError
} from './constructor'

import mongoose from 'mongoose';

const errorHandler = (err, options) => {
    if (err instanceof mongoose.Error) {
        return mongooseErrorHandler(err, options);
    }
    return expressErrorHandler(err, options);
};

const handleErrorAndRespond = (err, options) => 
    (res) => {
        const error = errorHandler(err, options);
        return res.status(error.code).json(error);
    }

module.exports = {
    mongooseErrorHandler,
    expressErrorHandler,
    standardizeError,
    errorHandler,
    handleErrorAndRespond,
    CustomError
};

export default errorHandler