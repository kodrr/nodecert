// character encoding for "A" and eye emoji is different
// A will take 1 byte, eye emoji will take 2 byte for utf8, 4 byte for utf16le
//char encoding - utf8 or utf16le - gagawin nyang binary data - hexa
//binary-to-text encoding - galing binary(naka buffer) toString, hex and base64

const buffer = Buffer.from('A', "utf16le") //utf8 ang default na char encoding
console.log(buffer) // naka hex or depende
console.log(buffer.toString()) // binalik mo lang to string 'A' or any char
console.log(buffer.toString('hex')) //binalik mo sya sa hex na same din sa < Buffer 41> 
console.log(buffer.toString('base64')) //mas maraming bits ang string or char
//so ang utf8 is same sa hex base 16 , 2^4


