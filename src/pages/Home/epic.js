import { Observable } from 'rxjs'

const fetchMovies = () => fetch('http://swapi.co/api/films/?format=json')
  .then(response => response.json())

const loadMoviesEpic = action$ => action$
  .ofType('HOMEACTIONGETMOVIES')
  .mergeMap(action =>
    Observable.from(fetchMovies())
    .map(data => ({ type: 'HOMEACTIONGOTMOVIES', payload: data.results }))
  )

export default [
  // loadEpicEpic,
  loadMoviesEpic
]
