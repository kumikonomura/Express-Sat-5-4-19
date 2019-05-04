const express = require('express')
const app = express()
const {join} = require('path')
// middleware lives inside of express
// serves up all of front end
app.use(express.static(join(__dirname, '/public')))
// app.use allows us to identify pieces of middleware that we need to rely on, allows JSON
app.use(express.json())
// allow for deeply structured JSON, nested JSON
app.use(express.urlencoded({extended: true}))

// app.get('/one', (req,res)=> {
//     res.send('#1')
// })

// app.post()
// app.delete()
// app.put()

const routes = require('./routes')

routes(app)
// if cannot find port, will put it at 3000
app.listen(process.env.PORT || 3000)