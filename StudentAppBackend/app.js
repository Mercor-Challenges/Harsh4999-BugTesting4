const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose')
const router = require('./resource/routes')
const cors = require('cors');
const app = express();
mongoose.connect('mongodb://username:pass@localhost:27017/admin')
.then(()=>{
    console.log('connected db');
})

app.listen(3000);
app.use(cors());
app.use(bodyParser.json())

app.get('/',(req,res,next)=>{
    res.send("Hello");
})
app.use('/student',router);
