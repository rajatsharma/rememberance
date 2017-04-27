import { injectReducer } from '../../store/reducers'
import { injectSagas } from '../../store/sagas'

// Sync route definition
export default(store) => ({
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const container = require('./container').default
      const reducer = require('./reducer').default
      const sagas = require('./sagas').default
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'home', reducer })
      injectSagas(store, sagas)
      /*  Return getComponent   */
      cb(null, container)

      /* Webpack named bundle   */
    }, 'home')
  }
})
