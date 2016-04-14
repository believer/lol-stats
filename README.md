### LOL stats

I wanted to try out [Highland.js](http://highlandjs.org) so I whipped something together using the [Riot API](https://developer.riotgames.com/).

#### Get started
```
npm install
npm start

add config.json (see below)
```
Navigate to [http://localhost:4000?summoner=YourSummonerNameHere](http://localhost:4000?summoner=YourSummonerNameHere) in your favorite browser.

#### Config
The project uses [nconf](https://github.com/indexzero/nconf) for environment variables and looks for a config.json in the root folder. Change to whatever region you are in instead of EUNE.

```
{
  "apiKey": "<A-Riot-API-key>",
  "baseUrl": "https://eune.api.pvp.net/api/lol/eune",
  "globalBaseUrl": "https://global.api.pvp.net/api/lol/static-data/eune"
}
```
