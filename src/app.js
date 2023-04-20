const express = require("express")
const cors = require('cors')
require('dotenv').config()

const productRouter = require('./users/products.router')

const db = require('./utils/database')
const app = express()

const PORT = process.env.PORT || 4000

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))

//? Validar la conexión 
db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))
    

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'Server OK', 
        myMessage: req.message,
        myPort: process.env.PORT
    })
}) 

app.use('/api/v1', productRouter)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})
