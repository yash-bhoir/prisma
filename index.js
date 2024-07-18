const cookieParser = require('cookie-parser')

const express = require('express')
const app = express();
require('dotenv').config

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get ('/',(req , res)=>{
  res.send(" hey i am server ")  
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});