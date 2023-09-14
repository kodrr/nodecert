./node_modules/.bin/tap --> it will run tap in the test folder as default
./node_modules/.bin/jest ./jest/ --> it will run jest in the ./jest folder in the argument
./node_modules/.bin/jest ./jest/add.test.js --> it will run jest in specific test file

"scripts": {
"test": "jest --coverage"
} --> in package.json it will run the test folder as default, else you can add what specific folder to run as argument, -- coverage will create a coverage folder as summary of the test
