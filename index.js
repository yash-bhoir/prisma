const cookieParser = require('cookie-parser')
const userRoute = require('./routes/userRoutes')

const express = require('express')
const app = express();
require('dotenv').config(); // Add parentheses to call config function

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get ('/',(req , res)=>{
  res.send(" hey i am server ")  
});


app.use("/api/v1/users", userRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});