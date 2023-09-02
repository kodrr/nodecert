const buffer = Buffer.from("👀");
const json = JSON.stringify(buffer);
console.log("to json: ", json);
const parsed = JSON.parse(json);
console.log("parsed: ", parsed); // prints { type: 'Buffer', data: [ 240, 159, 145, 128 ] }
console.log(Buffer.from(parsed.data)); // prints <Buffer f0 9f 91 80>
