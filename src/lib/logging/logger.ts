import winston from 'winston';
import Transport from 'winston-transport'
import { AppDataSource } from '@/data-source';
import { initDatabase } from '@/db/db-manager';
import { Log } from '@/db/entities/Log';

export const generalLogger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: "debug",
            format: winston.format.combine(winston.format.timestamp(), winston.format.label({ label: 'general' }), winston.format.colorize(), winston.format.printf((info) => `${info.timestamp} [${info.label ?? 'general'}] (${info.level}) ${info.message}`))
        }),
        new Transport({
            log: (info, next) => {

                return new Promise<void>(async (resolve, reject) => {
                    try {
                        await initDatabase();

                        const { message, level, label, timestamp } = info;

                        const logRepository = AppDataSource.getRepository(Log);

                        const logObj = new Log();
                        logObj.label = label ?? 'general';
                        logObj.level = level;
                        logObj.logTimestamp = new Date(timestamp);
                        logObj.message = message;
                        await logRepository.save(logObj);
                        resolve();
                    } catch (err) {
                        console.error(err);
                        reject(err);
                    } finally {
                        setImmediate(() => next());
                    }
                });
            },
            level: "debug",
            format: winston.format.combine(winston.format.timestamp(), winston.format.uncolorize()),
        })
    ],
    level: 'debug',
})