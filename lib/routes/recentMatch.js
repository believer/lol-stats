const _ = require('highland')
const nconf = require('nconf').env('__').file({
  file: 'config.json'
})
const BASE = nconf.get('baseUrl')
const GLOBAL_BASE = nconf.get('globalBaseUrl')
const KEY = nconf.get('apiKey')
const fetch = require('../utils/fetch')

function getMatches (url, summoner) {
  return fetch(url)
    .then(data => {
      return Object.assign(summoner, { match: data.games[0] })
    })
}

function getChampion (url, summoner) {
  return fetch(url)
    .then(data => {
      return Object.assign(summoner, { champion: data })
    })
}

function getRecentMatches (params) {
  const user = params.user.toLowerCase()
  const getSummoner = `${BASE}/v1.4/summoner/by-name/${user}?api_key=${KEY}`
  const getRecentGames = `${BASE}/v1.3/game/by-summoner/{id}/recent?api_key=${KEY}`
  const champion = `${GLOBAL_BASE}/v1.2/champion/{id}?champData=blurb,image&api_key=${KEY}`

  return _(fetch(getSummoner))
    .map(summoner => summoner[user])
    .flatMap(summoner => {
      const url = getRecentGames.replace('{id}', summoner.id)
      return _(getMatches(url, summoner))
    })
    .flatMap(summoner => {
      const url = champion.replace('{id}', summoner.match.championId)
      return _(getChampion(url, summoner))
    })
}

module.exports = getRecentMatches
