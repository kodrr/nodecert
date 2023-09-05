const { error } = require("console");
const { readdirSync, readdir } = require("fs");
const { readdir: readdirprom } = require("fs").promises;

try {
  console.log("sync:", readdirSync(__dirname));
} catch (error) {
  console.error(error);
}

readdir(__dirname, (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(" async callback:", data);
});

async function run() {
  const data = await readdirprom(__dirname);
  console.log("async prom:", data);
}

run().catch((err) => {
  console.error(err);
});
