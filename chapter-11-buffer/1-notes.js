//Buffer.from('string') - pag  ginawa momg buffer ang string need nya i convert to bytes
// ang default encoding is utf8
//utf8 is variable charater encoding frotm 1 byte to 4 bytes

//2nd argument in Buffer.from is encoding
// character encoding for "A" and eye emoji is different
//character encoding: utf8, utf16le

// A will take 1 byte, eye emoji will take 2 byte for utf8, 4 byte for utf16le
//char encoding - utf8 or utf16le - gagawin nyang binary data - (same as hex)
//binary-to-text encoding - galing binary(naka buffer) toString, hex and base64

// const buffer = Buffer.from("A", "utf16le"); //utf8 is default char encoding
// console.log("this is buffer data", buffer); // <Buffer 41 00>
// console.log(buffer.toString()); // binalik mo lang to string 'A'
// console.log(buffer.toString("hex")); //binalik mo sya sa hex na same din sa binary 4100
// console.log(buffer.toString("base64")); //mas maraming, QQA=

const buffer = Buffer.from("👀"); //utf8 ang default na char encoding
console.log("this is buffer data: ", buffer);
console.log("back to string: ", buffer.toString());
console.log("binary to text encoding(hex): ", buffer.toString("hex"));
console.log("binary to text encoding(base64): ", buffer.toString("base64"));
