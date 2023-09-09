"use strict";

//console.log(process.stdin.isTTY ? "terminal" : "piped to");
//the console.log function prints to STDOUT and STDERR is a separate output device
//which also prints to the terminal.

//node -p "crypto.randomBytes(100).toString('hex')" | node example.js > out.txt
process.stderr.write(process.stdin.isTTY ? "terminal\n" : "piped to\n");
//it will print in terminal if not 2> err.txt, same bahavior with console.error

//console.error(process.stdin.isTTY ? "terminal" : "piped to");
//piped to will print in the terminal if no 2> err.txt in command else it will prinnt in err.txt

//it's worth knowing that if we wanted to redirect the STDERR output
//to another file on the command line 2> can be used:

//node -p "crypto.randomBytes(100).toString('hex')" | node example.js > out.txt 2> err.txt
//stdout will write to out.txt while stderr will write to err.txt

const { Transform } = require("stream");

const createUppercaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      const uppercased = chunk.toString().toUpperCase();
      next(null, uppercased);
    },
  });
};

const uppercase = createUppercaseStream();
process.stdin.pipe(uppercase).pipe(process.stdout);
