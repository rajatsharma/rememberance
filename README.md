# Eldritch

![Dark Side](https://s-media-cache-ak0.pinimg.com/736x/34/39/fd/3439fddbe50de2f8b99bb032c5cc9650.jpg)

Enter the Dark side of Redux and experience the raw power of Pure Functional Programming

Redux without

- Constants
- Selectors uses Functional Lenses instead
- ImmutableJS uses Pure Functions to manipulate store instead

An Awesome boilerplate to get things done with Redux faster.

Requires Firebase Configuration. Add this as `src/fireconfig.js`

```js
export const firebase = {
  apiKey: 'xxxxxxxxxxxxxx',
  authDomain: 'xxxx.firebaseapp.com',
  databaseURL: 'https://xxxx.firebaseio.com',
  projectId: 'xxxxx',
  storageBucket: 'xxxx.appspot.com',
  messagingSenderId: 'xxxxxxxxxxxx'
}

export const reduxFirebase = {
  enableLogging: false // enable/disable Firebase Database Logging
}

export const env = 'development'
export default { firebase, reduxFirebase, env }

```
