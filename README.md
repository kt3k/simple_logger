# simple_logger v0.0.3

A simple logger for [Deno](https://deno.land/)

# Usage

```ts
import { create } from "https://raw.githubusercontent.com/kt3k/simple_logger/v0.0.3/mod.ts";

const logger = create("info");

logger.trace("trace logging"); // doesn't print
logger.debug("debug logging"); // doesn't print
logger.info("info logging"); // does print
logger.log("info logging"); // does print
logger.warn("warn logging"); // does print
logger.error("error logging"); // does print
```

Supply custom logger

```ts
const logger = create("warn", {
  trace(...args) {
    ...
  }
  debug(...args) {
    ...
  }
  info(...args) {
    ...
  }
  log(...args) {
    ...
  }
  warn(...args) {
    ...
  }
  error(...args) {
    ...
  }
});

logger.trace("trace logging"); // doesn't execute
logger.debug("debug logging"); // doesn't execute
logger.info("info logging"); // doesn't execute
logger.log("info logging"); // doesn't execute
logger.warn("warn logging"); // does execute
logger.error("error logging"); // does execute
```

# License

MIT
