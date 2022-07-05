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
    const db = client.db('champions')
    const soccerTeams = db.collection ('teams')
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true}))
   app.use(express.static('public'))
    app.use(bodyParser.json())
   
   app.get('/', (req, res) => {
      soccerTeams.find().toArray()
      .then(results =>{
        console.log(results)
        res.render('index.ejs', {teams: results})
      })
      .catch(error => console.error(error))
      
      })
      app.post('/teams',(req, res)=>{
       soccerTeams.insertOne(req.body)
       .then(result => {
        console.log(result)
        res.redirect('/')
       })
       .catch(error => console.error(error))
      })

app.put('/teams', (req, res) =>{
 soccerTeams.findOneAndUpdate(
  {name: 'prosper'},
  {
    $set: {
      name: req.body.name,
      surname: req.body.surname,
      teams: req.body.teams
    }
  },
{
  upsert: true
}
 )
 .then(result =>{
  console.log(result)
  res.json('success')
 })
 .catch(error => console.error(error))
})
app.delete('/teams', (req,res) => {
  soccerTeams.deleteOne(
    {name: req.body.name },
  )
  .then(result => {
    if (result.deletedCount === 0) {
      return res.json('No quote to delete')
    }
    res.json(`Deleted Team`)
  })
  .catch(error => console.log(error))
})
      app.listen(3000,function(){
        console.log('listening on 3000')
    })
})
  .catch(error => console.error(error))






  
