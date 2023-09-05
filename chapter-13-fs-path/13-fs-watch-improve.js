const { join, resolve } = require("path");
const { watch, readdirSync, statSync } = require("fs");

const cwd = resolve(".");

const files = new Set(readdirSync("."));

watch(".", (evt, filename) => {
  try {
    const { ctimeMs, mtimeMs } = statSync(join(cwd, filename));
    if (!files.has(filename)) {
      evt = "created";
      files.add(filename);
    } else {
      if (ctimeMs === mtimeMs) evt = "content-updated";
      else evt = "status-update";
    }
  } catch (error) {
    if (error === "ENOENT") {
      files.delete(filename);
      evt = "deleted";
    }
  } finally {
    console.log(evt, filename);
  }
});
