'use strict'

const restify = require('restify')
const routes = require('./routes')

const app = restify.createServer({})
app.pre(restify.pre.sanitizePath())
app.use(restify.CORS())
app.use(restify.bodyParser())
app.use(restify.queryParser())

routes.register(app)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log('listening on port', port)
})

// app.on('error', err => console.error('app error', err, err.stack))
// app.on('uncaughtException', err => console.error('app uncaughtException', err, err.stack))
