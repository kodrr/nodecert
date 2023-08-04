const add = (a, b) => a + b;

module.exports = add;

console.log();
console.group("# package resolution");
console.log(`require('pino')`, "\t", " =>", require.resolve("pino"));
console.log(`require('standard')`, "\t", " =>", require.resolve("standard"));
console.groupEnd("");
