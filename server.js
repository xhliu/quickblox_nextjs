const express = require('express')
const next = require('next')
// const QB = require('./bower_components/quickblox/quickblox.min')
const QB = require('quickblox')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const CREDENTIALS = {
  appId: 65950,
  authKey: 'dzzgACdfghpw8AG',
  authSecret: '8xDksQXGYFDXyn5'
};
QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret)

app.prepare()
.then(() => {
  // console.log(QB.version)
  const server = express()

  server.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
