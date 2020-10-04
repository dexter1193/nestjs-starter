import { format } from 'path';
/**
 * File: logger.config.ts
 * Author: Dexter
 * Note:
 */

import { transports, format as f, LoggerOptions } from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';

export const loggerConfig: LoggerOptions = {
    transports: [new transports.Console({
        level: 'debug'
    })],
    format: f.combine(
        f.colorize({ all: true }),
        f.splat(),
        f.simple(),
        f.timestamp(),
        nestWinstonModuleUtilities.format.nestLike()       
    ),
    exitOnError: false
};