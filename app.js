const finnhub = require('finnhub')

const api_key = finnhub.ApiClient.instance.authentications['api_key']
api_key.apiKey = 'c9r5972ad3ibg4fjo5og'
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.forexSymbols(
  'OANDA[0]["descriptio"]',
  (error, data, response) => {
    console.log(data)
  },
)
