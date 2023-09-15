const { readFile } = require("fs/promises");

async function readAsync() {
  const contents = await readFile(__filename);
  console.log(contents.toString());
}

readAsync().catch(console.error);
