## Intro
 This is a boilerplate for my react project to create a property search engine that will have multiple pages & might probably be a boilerplate for more react projects:
 * This react project is called 'surreal estate' is decribed thus;
    * Will have a listing page where you can search for different properties and sort/filter the results.
    * An add property page where you will add new properties
    * A property page
Properties will come from an API that we have created
## Concept
 We are going to implement the project using the following concepts;
  * Single Page Application (SPA)
  * Client-side Routing
  * Controlled Inputs
  * HTTP Requests
  * API Interaction
  * OAut

## Getting Started
``` run npx-create-react-app surreal estate ```

## After running npx-create-react-app surreal estate
* got to the public folder
 * delete all the files except html file
   * in html file, delete, all the comments, favicon link and manifest
   * change the title to surreal-estate

* goto src folder
  **remove the serviceWorker.js and SVG file - app will crash at this point
  * *open *index.js* which is our app entry point
    * delete comments, serviceWorker import and serviceWorker.unregister(); 
  * open *App.js* and replace everything within the div with 'Surreal Estate' in h2 tag

## /src file structure
In src, create 3 folders: *components*, *tests* & *styles*
 * move *App.js*, *App.test.js* & *App.css* into them respectively
 * /src now contains index.js, index.css and the configuration file that powers our test suite- setupTests.js
 * now update import paths by following the failed to compile errors in the browser, delete useless import paths too (remember logo.svg? delete the import path, its the reason 'Surreal Estate' in h2 tag has not been rendered before we started changing src file structure)
 * delete all the styles in App.css
 * run ```npm test```
   * change import path for *App* & 'learn react' to 'surreal estate'
   ** test should pass now 
   
## Initialise a git repo
Stage, commit and push

## Add a Google font
In the main or first loading CSS file, in our own case, the *index.css* at the very top of the page, just do: 
* ``` @import url('https://fonts.googleapis.com/css?family=Nunito:400,700'); ```

* in the body, do:
```
body {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', cursive;
};
```
* Import this into *index.js* :
``` import './index.css'; ```

## Eslint & Airbnb style guide
In any other project we would start by installing eslint as one of of dev dependencies however, since we are using create-react-app this dependency is already included. We do need to install a few other though: 
``` "eslint-config-airbnb": "^18.2.0",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-react": "^7.20.3",
    "eslint-plugin-react-hooks": "^4.0.5"
```
We can do this by writing on the command line:
``` npm i -D  eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks ```

This will install a set of eslint plugins that support Airbnb Style Guide but, will result in compilation error in the browser;

**Failed to compile**

./node_modules/scheduler/index.js
Error: ENOENT: no such file or directory, open '/node_modules/scheduler/index.js'

So we need to add a configuration file *.eslintrc.json* to the root of our project with the following content:
``` {
  "env": {
      "browser": true,
      "es6": true,
      "jest":true
  },
  "extends": [
      "plugin:react/recommended",
      "airbnb"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
} 
```

The configuration sbove is the standard Airbnb dev team. But we also need to enforce the strict use of .jsx files for JSX (instead of being able to use either *.jsx* or *.js*. 
So we change the *rules* thus;

``` "rules": {
    "no-underscore-dangle": [0],
    "react/jsx-props-no-spreading": [0],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
} 
```
And so that our linter knows how to handle jest global variables like describe, test, etc: change rules in *.eslintrc.json* *.env* to:

``` "env": {
    "browser": true,
    "es2020": true,
    "jest": true
  }
  ```
## Install Prettier
Because i already use Prettier with VSCode, i just installed a few dependencies with ```npm i -D prettier eslint-config-prettier eslint-plugin-prettier``` and then update the extends in the .**eslintrc** file with:
``` "extends": [ "airbnb", "plugin:prettier/recommended" ] ```





## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
