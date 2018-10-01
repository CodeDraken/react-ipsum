
# React Ipsum

[![Build Status](https://travis-ci.com/CodeDraken/react-ipsum.svg?branch=master)](https://travis-ci.com/CodeDraken/react-ipsum)

React Lorem Ipsum components to be used as placeholders in designs.

## Components

View the components in a [Storybook here](https://codedraken.github.io/react-ipsum/).

## NPM

`npm i react-ipsum`

https://www.npmjs.com/package/react-ipsum


## Contributing Instructions

1. Fork the repo and download / clone your fork.
2. Run `npm install`

### Commands

`npm run storybook` - starts storybook on `localhost:6006` This is the main way to preview the components. You make a component, add stories for it and play around with it.

`npm test` - runs unit tests using Jest

`npm run lint` - runs the Standard JS linter

`npm run lint-fix` - runs Standard and tries to fix detected issues

`npm run build` - outputs minified, processed code into `dist/index.js` Use this to test the components like you would if you had installed the package from npm. i.e `import { LoremText } from 'dist'`

`storybook-deploy` - deploys storybook to gh-pages branch.
