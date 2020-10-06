How to create and configure a React app that uses TypeScript, Redux, React Router, Bootstrap, Saas, ESLint, Prettier, and VSCode.

This repo contains instructions on creating a React app configured with:

- [TypeScript](https://www.typescriptlang.org) (Programming language)
- [React](https://reactjs.org) (User interface library)
- [Create React App / React Scripts](https://github.com/facebook/create-react-app) (Initial template creation + build and run scripts)
- [Redux](https://redux.js.org) (State management)
- [React Router](https://reactrouter.com) (URL routing)
- [Bootstrap](https://getbootstrap.com) / [React Bootstrap](https://react-bootstrap.github.io) (CSS framework)
- [Node-sass](https://github.com/sass/node-sass) (CSS preprocessor)
- [ESLint](https://eslint.org) (Linting)
- [Prettier](https://prettier.io) (Code formatting)
- [Visual Studio Code](https://code.visualstudio.com) (IDE)

## Instructions:

1. Create initial template

   1. `npx create-react-app my-app --template redux-typescript`

1. React Router

   1. `yarn add react-router-dom @types/react-router-dom`
   1. Update [`App.tsx`](src/App.tsx#L10) to use a [Router](https://reactrouter.com/web/guides/quick-start)

1. Configure ESLint, Prettier, TypeScript, and VS Code

   1. `yarn add prettier eslint-config-prettier eslint-plugin-prettier`
   1. Add [`.eslintrc.js`](.eslintrc.js)
   1. Add [`.prettierrc.js`](.prettierrc.js)
   1. Add [`.vscode/settings.json`](.vscode/settings.json)
   1. Add lint scripts to [`package.json`](package.json#L30-L31)

1. Lint and format

   1. Open each source file in VS Code and save
   1. `yarn lint`
   1. Fix any lint warnings or errors

1. Bootstrap and Node-sass

   1. `yarn add bootstrap react-bootstrap node-sass`
   1. Rename all`.css` files to `.scss`
   1. Add [`bootstrap-custom.scss`](bootstrap-custom.scss)
   1. In [`App.scss`](src/App.scss#L1) add `@import "bootstrap-custom";`
   1. Update each file that imports a `.css` file to import the new `.scss` file
   1. We can now use Bootstrap components like this:

      ```js
      import Button from 'react-bootstrap/Button'

      function MyButton() {
        return <Button variant="success">Success Button</Button>
      }
      ```

# Original Readme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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
