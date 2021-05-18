import { assertEquals } from "https://deno.land/std@0.96.0/testing/asserts.ts";
import { create } from "./mod.ts";

const reset = () => ({
  trace: 0,
  debug: 0,
  info: 0,
  log: 0,
  warn: 0,
  error: 0,
});
Deno.test("create", () => {
  let result = reset();
  const l = {
    trace: () => {
      result.trace += 1;
    },
    debug: () => {
      result.debug += 1;
    },
    info: () => {
      result.info += 1;
    },
    log: () => {
      result.log += 1;
    },
    warn: () => {
      result.warn += 1;
    },
    error: () => {
      result.error += 1;
    },
  };

  let logger = create("trace", l);
  logger.trace();
  logger.debug();
  logger.log();
  logger.info();
  logger.warn();
  logger.error();
  assertEquals(result.trace, 1);
  assertEquals(result.debug, 1);
  assertEquals(result.info, 1);
  assertEquals(result.log, 1);
  assertEquals(result.warn, 1);
  assertEquals(result.error, 1);

  result = reset();
  logger = create("debug", l);
  logger.trace();
  logger.debug();
  logger.log();
  logger.info();
  logger.warn();
  logger.error();
  assertEquals(result.trace, 0);
  assertEquals(result.debug, 1);
  assertEquals(result.info, 1);
  assertEquals(result.log, 1);
  assertEquals(result.warn, 1);
  assertEquals(result.error, 1);

  result = reset();
  logger = create("info", l);
  logger.trace();
  logger.debug();
  logger.log();
  logger.info();
  logger.warn();
  logger.error();
  assertEquals(result.trace, 0);
  assertEquals(result.debug, 0);
  assertEquals(result.info, 1);
  assertEquals(result.log, 1);
  assertEquals(result.warn, 1);
  assertEquals(result.error, 1);

  result = reset();
  logger = create("warn", l);
  logger.trace();
  logger.debug();
  logger.log();
  logger.info();
  logger.warn();
  logger.error();
  assertEquals(result.trace, 0);
  assertEquals(result.debug, 0);
  assertEquals(result.info, 0);
  assertEquals(result.log, 0);
  assertEquals(result.warn, 1);
  assertEquals(result.error, 1);

  result = reset();
  logger = create("error", l);
  logger.trace();
  logger.debug();
  logger.log();
  logger.info();
  logger.warn();
  logger.error();
  assertEquals(result.trace, 0);
  assertEquals(result.debug, 0);
  assertEquals(result.info, 0);
  assertEquals(result.log, 0);
  assertEquals(result.warn, 0);
  assertEquals(result.error, 1);
});
