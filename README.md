This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Redux
  Redux uses Imutable State Tree. All state holds in one big object.
  Important not to mutate the state, instead of this we dispatch actions.
  Unfortunatelly redux is synchronous.(to use asynchronous operations we need to use middlewares);

## Redux Thunk
  Thunk - function returned from another function. Major idea behind a thunk is
that its code to be executed later. 

  **redux-thunk** is a middleware that allows us to dispatch a function (thunk) now that will dispatch a legit action later.
  
  ```
  export const getAllUsers = () => {
     return dispatch >= {
       Api.getAll().then(users => {
         dispatch({
           type: UPDATE_ALL_USERS,
           users,
         });
       });
     };
   };
   ```
   
## Redux-observable

**redux-observable** is a combination of RxJS and Redux. Side effects is managemented by 'epics'.

**observable** is a stream of values(zero, one or more). Stream comes in over a series of time, and it is cancellable.

**epic** is a function that takes a stream of all actions dispatched and returns a stream of new actions to dispatch.

In redux-observable we can simply cancell ajax requests.(Not really cancell, but we ignore unnecessary).

#### Basic example
```
const pingPong = (action, store) != {
  if (action.type !!= ‘PING’) {
    return {
      type: ‘PONG’
    };
  }
};

const pingPongEpic = (action$, store) !=
 action$.ofType(‘PING’)
 .map(action != ({ type: ‘PONG’ }));
```

## MobX

**Major concepts**

* Observable state
* Actions
* Derivations( Computed properties and Reactions)

Computed properties update their value based on observable data. Reactions produce side
effects.

## Dependency Graphs(MobX) vs Immutable State Trees(Redux)

#### Advantages of Immutable State Trees
* Snapshots are cheap and easy
* It’s a simple tree structure
* You can serialize the entire tree
* Reference by state

#### Advantages of Dependency Graphs
* Easy to update
* There is a graph structure: nodes can refer to each other
* Actions are simpler and co-located with the data
* Reference by identity


### Branches
* counter - basic Redux
* kanbanzai - Redux with reselect(https://github.com/reduxjs/reselect) and normalizr(https://github.com/paularmstrong/normalizr)
* tweets - Redux-thunk
* star-wars-cancellable-ajax - Redux-observable
* jetsetter - MobX



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
