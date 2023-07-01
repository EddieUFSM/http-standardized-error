<div align="center">
    <p align="center" style="margin: 0; font-weight: bold;">
        <span style="color: #856404;">&#9888;</span> <span>This package is under development! </span>
        <span style="color: #856404;">&#128679;</span>
    </p>
    <p align="center" style="margin: 0;">The release is scheduled for August 16th.</p>
</div>
<h1 align="center">
http-standardized-error
</h1>

<p align="center">
 ttp-standardized-error is a JavaScript library that aims to capture errors from commonly used libraries and return a standardized error object. This error object includes the correct HTTP status code and a precise error message. 
</p>

<p align="center">
  <img alt="Static Badge" src="https://img.shields.io/badge/licence-MIT-green">
  <a href="https://www.patreon.com/mjest"><img alt="Static Badge" src="https://img.shields.io/badge/patreon-donate-green"></a>
</p>

## Installation

You can install http-standardized-error using npm:

```bash
npm install http-standardized-error
```
<h2>
Usage
</h2>
To use http-standardized-error, simply require it in your JavaScript file:

javascript
```javascript
const errorHandler = require('http-standardized-error');
```
<h2>
Handling Errors
</h2>

http-standardized-error provides a simple interface for handling errors. You can pass an error object to the httpStandardizedError function to get a standardized error object in return:

javascript

```javascript

const error = new Error('Some error message');
const standardizedError = httpStandardizedError(error);

console.log(standardizedError);

```

The httpStandardizedError function will analyze the error object and generate a standardized error object with the appropriate HTTP status code and a detailed error message.

<h2>
Supported Libraries
</h2>

http-standardized-error currently supports the following commonly used JavaScript libraries:

- Axios
- Express
- Mongoose

The library automatically detects errors thrown by these libraries and provides standardized error objects for them. If you encounter an error from a different library, the library will attempt to provide a generic standardized error object.

<h2>
Contributing
</h2>

Contributions to http-standardized-error are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository. Pull requests are also encouraged.

When contributing, please ensure that your code follows the existing coding style and that you have written tests for any new functionality.

<h2>
Http response status
</h2>

http-standardized-error uses the following HTTP status codes:

1xx - Informacional:

100 Continue
101 Switching Protocols
102 Processing

<h3><s>2xx - Sucesso:</s></h3>
<ul>
  <li><s>200 OK</s></li>
  <li><s>201 Created</s></li>
  <li><s>202 Accepted</s></li>
  <li><s>204 No Content</s></li>
  <li><s>206 Partial Content</s></li>
</ul>
<h3><s>3xx - Redirecionamento:</s></h3>
<ul>
  <li><s>300 Multiple Choices</s></li>
  <li><s>301 Moved Permanently</s></li>
  <li><s>302 Found</s></li>
  <li><s>304 Not Modified</s></li>
  <li><s>307 Temporary Redirect</s></li>
  <li><s>308 Permanent Redirect</s></li>
</ul>

4xx - Erro do Cliente:

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 409 Conflict
- 410 Gone
- 429 Too Many Requests

5xx - Erro do Servidor:

- 500 Internal Server Error
- 501 Not Implemented
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout
- 505 HTTP Version Not Supported

<h2>
License
</h2>

http-standardized-error is open source and released under the MIT License.
