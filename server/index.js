const app = require('express')()
var cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./DB')
const emailRoutes = require('./routes/email.routes')
const userRoutes = require('./routes/auth.routes')

const apiPort = 8081

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use('/api/email', emailRoutes)
app.use('/api/user', userRoutes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))