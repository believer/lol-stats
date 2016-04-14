const fetch = require('node-fetch')

function getData (url) {
  return fetch(url)
    .then(response => response.json())
}

module.exports = getData
