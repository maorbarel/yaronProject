const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const addMsgRoute = require('./routes/Msg.Routes')

const app = express()
app.use(express.static('public'));
app.use(cors({
    origin: ['http://localhost:8080', 'http://localhost:8081'],
    credentials: true 
}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello! Hello World!')
})

addMsgRoute(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
