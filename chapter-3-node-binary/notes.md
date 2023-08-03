node --v8-options

node --check app.js - will check syntax

node --print "1+1"

node --eval "1+1"

<!-- the following would print all the files with a .js extension in the current working directory in which the command is run -->

node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))"

<!-- this will --require preload first then before the main file app.js -->

node -r ./preload.js app.js

<!-- a number higher than the amount of call frames in the stack guarantees that
the entire stack will be output: -->

node --stack-trace-limit=99999 app.js
