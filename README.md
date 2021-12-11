# Frontend Coding Challenge: Building a quiz

This is a quiz build out of two component: Quiz & Score Message

The users can select one answer for each question and submit their answers.
Once submitted, the users will see their score (# of correct answers).

As a backend, answers are stored in Local Storage. Thus, the users are able to leave the quiz and resume from where they left.

### Demo
![Alt Text](http://g.recordit.co/BWGJwQARhT.gif)

### Technology used

```bash
React
```

React is one of the most popular framework/library. By using React to build this feature we can easily re-use this feature/component in other larger components or Apps. Thanks to React we can separate our concerns, we can easily include the logic, form and styles in this one component.

## Extra thoughts

-The ScoreMessage could display the right answers in case the user selected a wrong one (with a link to a google map)
-The questions could appear one by one instead of showing the whole list at the same time
-We could add some tests to ensure the feature runs as planned


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
