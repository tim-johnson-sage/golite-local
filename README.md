
 +-+-+-+-+-+-+
 |G|o|L|i|t|e|
 +-+-+-+-+-+-+
 # golite-local
 ## Usage

1. requires Docker CLI
2. requires `~/.golite` directory to be created
3. add `glt` CLI to your `/bin` directory
4. clone the `golite-local` project. `git clone git@github.com:pemba-sherpa-sage/golite-local.git`

## Commands
1. navigate to your project's `openapispec` folder, eg. `resources/api/openapispec`, etc
2. initialize a golite container: `$glt init ~/path/to/golite-local`
3. change the directory to a desired module: `cd cf`
4. render the schema: `glt push`
5. check the linting report at http://localhost:8080/cf-lint.html
6. check the schema at http://localhost:8080/cf.html
7. Stop the golite container: `glt stop`

## Windows instructions
1. Ensure that you have Windows Subsystem for Linux (WSL) [installed](https://learn.microsoft.com/en-us/windows/wsl/install).
2. From the command line/powershell, run the `wsl` command
2. Within your WSL distribution, you will need to make sure that you have [installed Docker](https://dev.to/bowmanjd/install-docker-on-windows-wsl-without-docker-desktop-34m9).
3. Make sure the Docker daemon is running by typing `sudo service docker start` (or the appropriate escalated privileges for your distribution)
4. You can now follow the standard instructions in the [Usage](#usage) and [Commands](#commands) sections.
