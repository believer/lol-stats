'use strict'

const _ = require('highland')
const recentMatch = require('./recentMatch')

function register (app) {
  app.get('/', (req, res, next) => {
    recentMatch(req.params)
      .toArray(data => res.send(data))
  })
}

module.exports = {
  register
}
