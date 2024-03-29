var winston = require('winston');

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ json: false, timestamp: true }),
        new winston.transports.File({ filename: '../logs/debug.log', json: false, timestamp: true })
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({ json: false, timestamp: true }),
        new winston.transports.File({ filename: '../logs/exceptions.log', json: false, timestamp: true })
    ],
    exitOnError: false
});

module.exports = logger;