const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(cors());
require('dotenv').config()

//db connection
mongoose.connect(process.env.DB_URI)
const db = mongoose.connection
db.on('errror', (err)=> console.error(err))
db.once('open', ()=> console.log('Connected to db'))

app.use(express.json())

//users routes
const users_routes = require('./routes/users')
const posts_routes = require('./routes/posts')
const saved_posts_routes = require('./routes/saved_posts')
app.use('/users',users_routes);
app.use('/posts', posts_routes);
app.use('/save',saved_posts_routes)

app.get('/', (req, res) =>{
    res.send(200);
})




app.listen(8000)