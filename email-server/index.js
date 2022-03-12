const app = require('express')()
var cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/email.routes')
const apiPort = 8082

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use('/api', routes)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))