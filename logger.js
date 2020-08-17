const { createLogger, format, transports } = require('winston')
const fs = require('fs')
const DailyRotate = require('winston-daily-rotate-file')

const environment = process.env.NODE_ENV

class Logger {
  infoLogger

  errorLogger

  warnLogger

  allLogger

  constructor(logDir = 'logs', env = environment) {
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir)
    }

    this.infoLogger = createLogger({
      // change level if in dev environment versus production
      level: env === 'development' ? 'info' : 'debug',
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
        // this is to log in json format
        // format.json()
      ),
      transports: [
        new transports.Console({
          levels: 'info',
          format: format.combine(
            format.colorize(),
            format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
          ),
        }),

        new DailyRotate({
          filename: `${logDir}/%DATE%-info-results.log`,
          datePattern: 'YYYY-MM-DD',
        }),
      ],
      exitOnError: false,
    })

    this.errorLogger = createLogger({
      // change level if in dev environment versus production
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf(error => `${error.timestamp} ${error.level}: ${error.message}`),
      ),
      transports: [
        new transports.Console({
          levels: 'error',
          format: format.combine(
            format.colorize(),
            format.printf(error => `${error.timestamp} ${error.level}: ${error.message}`),
          ),
        }),

        new DailyRotate({
          filename: `${logDir}/%DATE%-errors-results.log`,
          datePattern: 'YYYY-MM-DD',
        }),
      ],
      exitOnError: false,
    })

    this.warnLogger = createLogger({
      // change level if in dev environment versus production
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf(warn => `${warn.timestamp} ${warn.level}: ${warn.message}`),
      ),
      transports: [
        new transports.Console({
          levels: 'warn',
          format: format.combine(
            format.colorize(),
            format.printf(warn => `${warn.timestamp} ${warn.level}: ${warn.message}`),
          ),
        }),

        new DailyRotate({
          filename: `${logDir}/%DATE%-warnings-results.log`,
          datePattern: 'YYYY-MM-DD',
        }),
      ],
      exitOnError: false,
    })

    this.allLogger = createLogger({
      // change level if in dev environment versus production
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf(silly => `${silly.timestamp} ${silly.level}: ${silly.message}`),
      ),
      transports: [
        new DailyRotate({
          filename: `${logDir}/%DATE%-results.log`,
          datePattern: 'YYYY-MM-DD',
        }),
      ],
      exitOnError: false,
    })
  }

  log(message, severity = 'info', data?) {
    if (severity === 'info') {
      this.infoLogger.log(severity, message, data)
      this.allLogger.log(severity, message, data)
    } else if (severity === 'error') {
      this.errorLogger.log(severity, message)
      this.allLogger.log(severity, message, data)
    } else if (severity === 'warn') {
      this.warnLogger.log(severity, message, data)
      this.allLogger.log(severity, message, data)
    }
  }

  error(message, data?) {
    this.log(message, 'error', data)
  }

  warn(message, data?) {
    this.log(message, 'warn', data)
  }
}

module.exports = Logger
