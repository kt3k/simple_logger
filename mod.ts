export type Level =
  | "trace"
  | "debug"
  | "info"
  | "warn"
  | "error";

export interface Logger {
  trace(...data: unknown[]): void;
  debug(...data: unknown[]): void;
  log(...data: unknown[]): void;
  info(...data: unknown[]): void;
  warn(...data: unknown[]): void;
  error(...data: unknown[]): void;
}

const noop = () => {};

export function create(level: Level, logger = getDefaultLogger()): Logger {
  logger = logger || {
    trace(...data: unknown[]) {
      logger.log(...data);
    },
    debug(...data: unknown[]) {
      logger.log(...data);
    },
    log(...data: unknown[]) {
      logger.log(...data);
    },
    info(...data: unknown[]) {
      logger.log(...data);
    },
    warn(...data: unknown[]) {
      logger.log(...data);
    },
    error(...data: unknown[]) {
      logger.log(...data);
    },
  };
  if (level === "trace") {
    return { ...logger };
  } else if (level === "debug") {
    return { ...logger, trace: noop };
  } else if (level === "info") {
    return { ...logger, trace: noop, debug: noop };
  } else if (level === "warn") {
    return { ...logger, trace: noop, debug: noop, log: noop, info: noop };
  } else if (level === "error") {
    return {
      ...logger,
      trace: noop,
      debug: noop,
      log: noop,
      info: noop,
      warn: noop,
    };
  }
  throw new Error(`Invalid log level: ${level}`);
}

export function getDefaultLogger(): Logger {
  return {
    trace(...data: unknown[]) {
      console.log(...data);
    },
    debug(...data: unknown[]) {
      console.log(...data);
    },
    log(...data: unknown[]) {
      console.log(...data);
    },
    info(...data: unknown[]) {
      console.log(...data);
    },
    warn(...data: unknown[]) {
      console.log(...data);
    },
    error(...data: unknown[]) {
      console.log(...data);
    },
  };
}
