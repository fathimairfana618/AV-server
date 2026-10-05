const jsonServer = require('json-server')
const avServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()

const PORT = 3000

  avServer.use(middleware)
  avServer.use(router)

  avServer.listen(PORT,()=>{
    console.log(`AV-Server started running at PORT:${PORT} successfully`);
    
  })