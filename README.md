# edgecastfunctions

This is an attempt to deploy a standalone Next.js app to Edgecast functions.

## Setup

* Ensure `yarn` is installed.
* Run `yarn install`
* Follow the Edgecast functions [quick start guide](https://developer.edgecast.com/edgecompute/#Functions-Edge.htm#QuickStart) to set up the CLI.

## Running the next app locally

```bash
yarn dev
```

## Deploying to Edgecast

```
yarn deploy
```

After the Next.js build, you'll see the following output from the `edge` CLI:

```
processing: edgecastfunctions
runtime:  default
language:  js
successfully uploaded
compiling function...
compile failed
Unable to compile function.
You may be trying to vendor an incompatible dependency.
```
