const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()
const port = process.argv[2] || process.env.port || 3000

app.use(morgan('dev'))
