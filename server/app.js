const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// IMPORT ROUTES
const labRoutes = require("./route/lab");
const stationRoutes = require("./route/station");

app.use("/api", labRoutes);
app.use("/api", stationRoutes);

// CONNECT DATABASE
mongoose.connect("mongodb+srv://bilgeurcukk:Ig30MVjEyr4KbbOO@cl.myvy6pd.mongodb.net/?retryWrites=true&w=majority&appName=mernj", {}).then(()=> console.log('DB connected') )
  .catch((err)=> console.log(err));


// MIDDLEWARE



const port = process.env["PORT "] || 8000


app.listen(port, ()=>{
  console.log(`app is running on port ${port}`);
})
