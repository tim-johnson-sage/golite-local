# Problem Statement (1-2 lines)
Currently, there is a GoLite Web version that renders the API schemas and the Linting results to assist schema developers in creating their API schemas. The current (Web) version relies on developers creating a PR to trigger the schema rendering and linting. It would be nice to have a comparable features locally as Web version which can give a more or less and instant feedback to schema developers and not have to wait for creating the PR
# Solution Summary (3-4 lines)
We are using the docker technology to build the needed dependencies in the container to render the schema and also host the rendered schema locally. These are being attempted to be done in CLI fashion, so the users may not have to interact directly with docker and will just issue GoLite CLI commands
# Next steps (1-2 lines)
The next steps would be to continue adding additional features as needed
