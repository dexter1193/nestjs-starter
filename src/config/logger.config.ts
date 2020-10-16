/**
 * File: logger.config.ts
 * Author: Dexter
 * Note:
 */

import {Injectable} from '@nestjs/common';
import {WinstonModuleOptions, WinstonModuleOptionsFactory} from 'nest-winston';
import {format, transports} from 'winston';
const cls =  require('cli-color');

@Injectable()
export class WinstonConfigService implements WinstonModuleOptionsFactory {
  createWinstonModuleOptions(): WinstonModuleOptions {
    return {
      format: format.combine(format.timestamp()),
      transports: [
        new transports.Console({
          format: format.printf(args => {
            const {level, context, timestamp, message, stack, trace} = args;
            let color = cls.green;
            let text = '';
            if (level === 'error') {
                color = cls.red;
                if (stack[0] != undefined || trace != undefined) {
                  console.log(stack);
                    const lines = trace != undefined ? trace.split('\n') : stack[0].split('\n');
                    lines[0] = color(message + ' ' +lines[0]);
                    text = lines.join('\n');
                } else {
                    text = color(message);
                }
            } else if (level === 'info') {
              color = cls.green;
              text = color(message);
            } else if (level === 'warn') {
              color = cls.yellow;
              text = color(message);
            } else if (level === 'debug') {
              color = cls.magentaBright;
              text = color(message);
            } else if (level === 'verbose') {
              color = cls.cyanBright;
              text = color(message);
            }

            return `${color(`[Petgro] ${process.pid}   -`)} ${new Date(timestamp).toLocaleString()}   ${
              context ? cls.yellow('[' + context + ']') : ''
            } ${text}`;
          }),
        }),
      ],
    };
  }
}