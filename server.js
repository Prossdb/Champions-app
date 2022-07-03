console.log('May Node be with you')
const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const app = express()
const mongoClient = require('mongodb').mongoClient
const connectionString = ('mongodb+srv://champions:Oxtails4@champions.pgqcfe4.mongodb.net/?retryWrites=true&w=majority')

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('champions-teams')
    app.use(bodyParser.urlencoded({ extended: true}))
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
      })
      app.post('/teams',(req, res)=>{
        console.log(req.body)
      })
      app.listen(3000,function(){
        console.log('listening on 3000')
    })
})
  .catch(error => console.error(error))






  
