import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import winston from 'winston';
import compression from 'compression';
import expressWinston from 'express-winston';
import winstonPapertrail from 'winston-papertrail';
import jwt from 'express-jwt';


// import custom configuration and utilities
import config from './config';
import logger from './utils/logger';


// initialize the api
const api = express();


// initialize middleware
api.use(cors());
api.use(compression());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());


// ignore authentication on the following routes
api.use(
        jwt({ secret: config.jwt.secret }).unless({
                path: [
                        '/',
                        '/auth/signup',
                        '/auth/login',
                        '/auth/forgot-password',
                        '/auth/reset-password',
                ],
        }),
);


// throw an error if a jwt is not passed in the request
api.use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
                res.status(401).send('Missing authentication credentials.');
        }
});


// initialize our logger (in our case, winston + papertrail)
api.use(
        expressWinston.logger({
                transports: [
                        new winston.transports.Papertrail({
                                host: config.logger.host,
                                port: config.logger.port,
                                level: 'error',
                        }),
                ],
                meta: true,
        }),
);


// listen on the designated port found in the configuration
api.listen(config.server.port, err => {
        if (err) {
                logger.error(err);
                process.exit(1);
        }
	
// require the database library (which instantiates a connection to mongodb)
        require('./utils/db');
	
// loop through all routes and dynamically require them – passing api
        fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
                require('./routes/' + file)(api);
        });
	
// output the status of the api in the terminal
        logger.info(`API is now running on port ${config.server.port} in ${config.env} mode`);
});