# react-starter
[![Build Status](https://travis-ci.org/JeanEspindola/react-starter.svg?branch=master)](https://travis-ci.org/JeanEspindola/react-starter)[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)[![codecov](https://codecov.io/gh/JeanEspindola/react-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/JeanEspindola/react-starter)
## A sample repository to start a new react application.

### Table of Contents
1. [Description](#description)
2. [How-to-Run](#how-to-run)
3. [Dependencies](#dependencies)

### Description
This project intends to provide a quick and fast starter for react applications enabling a the environment setup with most common dependencies included.

``
This project requires a previous installation of Node.JS and NPM in your computer.
``

### How-to Run

The basic setup of this project was created by following these series of articles from codecademy [React-Setup](https://www.codecademy.com/articles/react-setup-i).

Follow these instructions to start and run the application, using your preferred Terminal:

1. Run ``npm install`` to install all project and development dependencies.
    * NPM performs the installation of all dependencies and development dependencies in the project.
2. Run ``npm run build`` to build the application.
    * This npm script will make webpack to perform the transformations.
3. Run ``npm run start`` to start a local server
    * This npm script will also watch for any change inside the project and reload automatically.
4. Open a new browser tab and navigate to ``http://localhost:8080``
    * Enjoy!!

### Dependencies

This section will explain all dependencies used in this project with external references.

1. Main project Dependencies
    * React:
        * React core dependencies.
        * ``react, react-dom``.
    * Babel:
        * Compiler: used to compile JSX into regular javascript.
        * ``babel-core, babel-loader, babel-preset-react``.
    * Webpack:
        * Module bundler used to generate static assets.
        * Webpack-dev-server is used to start a local server for the application.
        * ``webpack, webpack-dev-server, html-webpack-plugin``.
    * ES6
        * In order to use ES6, another package is necessary and not installed initially in the guide.
        * ``babel-preset-es2015``
2. Other Dependencies
    * AJAX Requests
        * [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) is the new standard but not supported in all browsers.
        * Fetch Polyfill implements fetch() and make it available for all browsers.
        * [Fetch](https://github.com/github/fetch)
        * ``whatwg-fetch``
    * Redux
        * JavaScript framework for managing and maintaining application state.
        * For detailed information on how it works and how it differs from regular way, follow this [guide.](https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react)
        * ``redux, react-redux, redux-thunk``.
    * Code Coverage
        * [Jest](https://github.com/facebook/jest)
            * JavaScript unit testing framework.
            * Jest requires the react-test-renderer package to render the component to JSON
            * ``jest, react-test-renderer``.
        * [Enzyme](https://github.com/airbnb/enzyme)
            * JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse React Components' output.
            * ``enzyme, enzyme-adapter-react-16``.
        * For more information on how to plug them, follow this useful [guide.](https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8)
    * React Code with ESLint 
        * eslint is used to maintain code consistency and eslint-loader to plug with webpack.
        * To valid all ES6 code, babel-eslint is necessary.
        * To perform code style checking for react, eslint-plugin-react is necessary.
        * ``eslint, eslint-loader, babel-eslint, eslint-plugin-react``.
        * [AirBnB Style Guide](https://github.com/airbnb/javascript)
            * AirBnB ESLint configuration.
            * ``eslint-config-airbnb, eslint-plugin-import, eslint-plugin-jsx-a11y``
        * For further reference, follow this [article.](https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8)