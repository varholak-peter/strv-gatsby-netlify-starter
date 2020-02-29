# STRV Gatsby Starter

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=varholak-peter/strv-gatsby-netlify-starter)](https://dependabot.com)

**Note:** This starter uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).

This repo contains an example website that is built with [Gatsby](https://www.gatsbyjs.org/): **[Demo Link](https://build-4ab46045-1b4c-4e01-b649-74d1a7656a80.gtsb.io/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Gatsby Cloud](https://www.gatsbyjs.com/cloud/) for continuous deployment.

## Features

- Highly opinionated, less customisability more familiarity
- Basic directory organization
- Uses [Emotion](https://emotion.sh/docs/introduction) & [Tailwind](https://tailwindcss.com/) for styling
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Offline support out of the box
- Separate components for everything
- Perfect score on Lighthouse
- ...and more

## Prerequisites

- Node (Recommended using v10 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Getting Started (Recommended)

In order to use the starter, run the following script:

```
gatsby new <PROJECT_NAME> https://github.com/varholak-peter/strv-gatsby-netlify-starter
```

Once your project gets created run the following command to start Gatsby in development mode:

```
cd <PROJECT_NAME> && yarn dev
```

It is recommended to also run this in order to get up to date GraphQL type references:

```
yarn apollo:download && yarn apollo:gen
```

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).
