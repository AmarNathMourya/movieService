const router = require('express-promise-router')()
const { MoviesAdpater } = require('./controllers')

router.post(
  '/api/addMovies',
  MoviesAdpater.insertMoviesRecord
)
router.get(
  '/api/fetchMovies/:name?',
  MoviesAdpater.fetchMoviesData
)

router.delete('/api/removeMovie/:name', MoviesAdpater.deleteMoviesRecord)

module.exports = router
