// import { Observable } from 'rxjs'

const emitPosterUrlEpic = (action$, store, getFirebase) => action$
    .ofType('CHANGEPOSTERURL')
    .delay(1000)
    .do((action) =>
      getFirebase().set(`posters/${action.payload.path}`, action.payload.value)
    ).mapTo({ type:'SHOWTOASTER' })

export default [
  emitPosterUrlEpic
]
