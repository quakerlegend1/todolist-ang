import { Injectable } from '@angular/core'

export enum LogLevel {
  Error = 0,
  Warn = 1,
  Info = 2,
}

@Injectable()
export class LoggerService {
  constructor() {}

  logLevel = LogLevel.Info

  info(message: string): void {
    this.logWith(LogLevel.Info, message)
  }

  warn(message: string): void {
    this.logWith(LogLevel.Warn, message)
  }

  error(message: string): void {
    this.logWith(LogLevel.Error, message)
  }

  private logWith(level: LogLevel, message: string): void {
    if (level <= this.logLevel) {
      switch (level) {
        case LogLevel.Error:
          return console.error('%c ' + message, `color: red`)
        case LogLevel.Warn:
          return console.warn('%c ' + message, `color: orange`)
        case LogLevel.Info:
          return console.info('%c ' + message, `color: green`)
      }
    }
  }
}
