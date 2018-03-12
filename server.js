const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const serverController = require('./controllers/serverController')

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.get('/api/songs', serverController.get)
app.post('/api/song', serverController.post)




let port = 3001;
app.listen(port, () => {console.log(`Server listening on ${port}`)} )