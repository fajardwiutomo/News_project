
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const Controller = require('./controllers/controllers')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/register', Controller.register)
app.post('/login', Controller.login)
app.get('/news', Controller.getNews)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
