# Welcome to the Pluma App

Thank you so much for be the beta user of the Pluma app

to get you started please run the next commands

```
$ yarn
$ yarn docs // this is if you want to read the documentation
$ yarn start
```

the application uses (github actions)[https://github.com/parga/pluma/actions] for PR and the build itself

any commit to the

A lot of the code generated for documentation, testing and Integration test does not cover the entire application but serves more as an example of what could be done.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn harvest`

Executes a string harvester to collect all the string definitions for localization, and aggregates them in a english dictionary ready to be translated to other languages

### `yarn cypress:open`

Opens cypress runner for you to run the integration tests, make sure that the app is up and running


### `yarn cypress:run`

Runs all the cypress integration test from the console, make sure that the app is up and running

### `yarn doc`

Generates the application documentation
