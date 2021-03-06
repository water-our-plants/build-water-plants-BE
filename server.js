const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const configureRoutes = require('./routes/users.js')

const waterRoute = require('./routes/WaterDay.js')

const smsWorker = require('./twilio/Cron.js');

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api', configureRoutes)

server.use('/api/watering', waterRoute)

smsWorker.start();

module.exports = server