# Eldritch

![Dark Side](https://www.nerdstickers.com.br/loja/arquivos/2016/06/STK-292-Adesivo-Darth-Vader-Dark-Side-Nerd-Stickers.png)

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
