
 +-+-+-+-+-+-+
 |G|o|L|i|t|e|
 +-+-+-+-+-+-+
 # golite-local
 ## Usage

1. requires Docker CLI
2. requires `~/.golite` directory to be created
3. add `glt` CLI to your `~/bin` directory
4. clone the `golite-local` project. `git clone git@github.com:pemba-sherpa-sage/golite-local.git`

## Commands
1. navigate to your project's `openapispec` folder, eg. `resources/api/openapispec`, etc
2. initialize a golite container: `$glt init ~/path/to/golite-local`
3. change the directory to a desired module: `cd cf`
4. render the schema: `glt push`
5. check the schema at http://localhost:8080/cf.html
6. check the linting report at http://localhost:8080/cf-lint.html
7. Stop the golite container: `glt stop`
