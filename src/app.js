const express = require('express')
const serverless = require('serverless-http')
const app = express()

const router = express.Router()


router.get('/', (req,  res)=>{
    res.json({
        message: 'hello from node'})
})

app.use('/.netlify/functions/app',router)

// module.exports = app;
module.exports.handler = serverless(app);