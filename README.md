
 +-+-+-+-+-+-+
 |G|o|L|i|t|e|
 +-+-+-+-+-+-+
 # golite-local
 ## Usage

1. requires Docker CLI
2. requires `~/.golite` directory to be created
3. add `glt` CLI to your `~/bin` directory

## Commands
1. Initialize a new project: `glt init ~/path/to/Dockerfile` (should be in /openapispec folder)
2. change the directory to a desired module: `cd cf`
3. Render the schema: `glt push`
4. check the schema at http://localhost:8080/cf.html
5. check the linting reprot at http://localhost:8080/cf-lint.html
6. Stop the golite container: `glt stop`
