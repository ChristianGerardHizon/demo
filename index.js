const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000; //specifies the port no to whatever heroku gives or 5000 on local host

server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log('JSON Server is running')
})