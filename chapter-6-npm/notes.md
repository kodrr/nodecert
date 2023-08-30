npm install -h

<!-- also will read the repositories remote URI from git and add it to package.json. -->

npm init -y

npm install pino

<!-- This appends package-lock=false to the .npmrc file in the user home directory -->

node -e "fs.appendFileSync(path.join(os.homedir(), '.npmrc'), '\npackage-lock=false\n')"

<!-- To manually generate package-lock.json file for a project -->

npm install --package-lock

<!-- list dependency tree -->

npm ls --depth=99

node -p "fs.readdirSync('.').join('t')"

node -e "fs.rmSync('node_modules', {recursive: true})"

npm install --save-dev standard

<!-- will install only the dependecies for prod not including dev-dependencies -->

npm install --production

<!-- SEMVER -->

^7.6.2. This is another way to specify a Semver range: by prefixing the version with a caret (^). Using a caret on version numbers is basically the same as using an x in the MINOR and PATCH positions

MAJOR.MINOR.PATCH

Tilde (~): It is used like this: ~1.2.3. For example, if you specify ~1.2.3, npm will install any version greater than or equal to 1.2.3 but less than 1.3.0. It will update to the latest patch version within the 1.2.x range. - guard for the PATCH

Range with operators: "package-name": ">=1.2.3 <2.0.0" -- 1.2.3 inclusive and 2.0.0 exclusive
