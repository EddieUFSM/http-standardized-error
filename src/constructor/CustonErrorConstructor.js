class CustomError extends Error {
    constructor(name, message, httpErrorCode) {
        super(message);

        this.name = name || 'CustomError';
        this.message = message;
        this.httpErrorCode = httpErrorCode;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            httpErrorCode: this.httpErrorCode
        };
    }

    toString() {
        return this.toJSON();
    }

    static fromError(error) {
        if (error instanceof CustomError) {
            return error;
        }

        const message = error.name ? error.name : 'CustomError';
        const httpErrorCode = error.httpErrorCode ? error.httpErrorCode : 500;
        return new CustomError(message, httpErrorCode);
    }

    static fromMessage(message, httpErrorCode) {
        if (!message) {
            message = 'CustomError';
        }
        if (!httpErrorCode) {
            httpErrorCode = 500;
        }
        return new CustomError(message, httpErrorCode);
    }
}

module.exports = CustomError;