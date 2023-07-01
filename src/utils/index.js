import colors from 'colors';

const printError = ({ message, httpErrorCode, errors } ) => {
    console.log(colors.red('Error:'));
    console.log(colors.red('Message:'), message);
    console.log(colors.red('Http Error Code:'), httpErrorCode);
    console.log(colors.red('Errors:'), errors);
};

const standardizeError = (err) => {
    const { message, httpErrorCode, errors } = err;
    printError({ message, httpErrorCode, errors });
    return { message, httpErrorCode, errors }
};

export default standardizeError;