import standardizeError from '../standardizeError';

const mongooseErrorHandler = (err) => {
    // Error.CastError
    if (err instanceof mongoose.Error.CastError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 400,
            errors: 'Cast Error converting data type',
        });
    }
    // Error.DivergentArrayError
    if (err instanceof mongoose.Error.DocumentNotFoundError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 404,
            errors: 'Document Not Found',
        });
    }
    // Error.DuplicateKeyError
    if (err instanceof mongoose.Error.DuplicateKeyError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 409,
            errors: 'Duplicate Key Error',
            key: err.keyValue,
        });
    }
    // Error.DocumentNotFoundError
    if (err instanceof mongoose.Error.DocumentNotFoundError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 404,
            errors: 'Document Not Found',
        });
    }
    // Error.MissingSchemaError
    if (err instanceof mongoose.Error.MissingSchemaError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 500,
            errors: 'Missing Schema Error',
        });
    }
    // Error.MongooseServerSelectionError
    if (err instanceof mongoose.Error.MongooseServerSelectionError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 500,
            errors: 'Mongoose Server Selection Error',
        });
    }
    // Error.MongooseError
    if (err instanceof mongoose.Error.MongoError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 500,
            errors: 'Mongo Error',
        });
    }
    // Error.OverwriteModelError
    if (err instanceof mongoose.Error.OverwriteModelError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 500,
            errors: 'Overwrite Model Error',
        });
    }
    // Error.ParallelSaveError
    if (err instanceof mongoose.Error.ParallelSaveError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 500,
            errors: 'Parallel Save Error',
        });
    }
    // Error.StrictModeError
    if (err instanceof mongoose.Error.StrictModeError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 500,
            errors: 'Strict Mode Error',
        });
    }
    // Error.StrictPopulateError
    if (err instanceof mongoose.Error.StrictPopulateError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 500,
            errors: 'Strict Populate Error',
        });
    }
    // Error.ValidationError
    if (err instanceof mongoose.Error.ValidationError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 400,
            errors: err.errors,
        });
    }
    // Error.ValidatorError
    if (err instanceof mongoose.Error.ValidatorError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 400,
            errors: err.errors,
        });
    }
    // Error.VersionError
    if (err instanceof mongoose.Error.VersionError) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 500,
            errors: 'Version Error',
        });
    }
    // Error.messages
    if (err instanceof mongoose.Error.messages) {
        return standardizeError({
            message: err.message,
            httpErrorCode: 500,
            errors: 'Mongoose Error Messages',
        });
    }  

    return standardizeError({
        message: err.message,
        httpErrorCode: 500,
        errors: 'Internal Server Error',
    });
        
};

module.exports = mongooseErrorHandler;