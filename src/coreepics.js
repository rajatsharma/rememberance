const showLoaderEpic = action$ => action$
  .ofType('HOMEACTIONGETMOVIES')
  .mapTo({ type: 'SHOWHIDELOADER', payload: true })

const hideLoaderEpic = action$ => action$
  .ofType('HOMEACTIONGOTMOVIES')
  .mapTo({ type: 'SHOWHIDELOADER', payload: false })

const showToasterEpic = (action$, state) => action$
  .ofType('SHOWTOASTER')
  .do(action => state.dispatch({ type: 'SHOWHIDETOASTER', payload: true }))
  .delay(2000)
  .mapTo({ type: 'SHOWHIDETOASTER', payload: false })

export default [
  showLoaderEpic,
  hideLoaderEpic,
  showToasterEpic
]
