const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd7728985a60c4c4bb249468be5157a96',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

let myEmail = "akpham95@gmail.com"

const { getHTML, getCSS, getJS, getRollbar} = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)

app.get('/rollbar', getRollbar)


const port = process.env.PORT || 4000


app.listen(port, console.log(`Server running on ${port}`))