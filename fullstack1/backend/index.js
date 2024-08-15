require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const port = 5000;

app.get('/' , (req,res)=>{
     res.send("hello world this the your first backend project in which you have integrated login page to your backend using express.js")
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(process.env.PORT ,()=>{
    console.log(`the server is running in the port ${port}`)
})