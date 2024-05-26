const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors')
// IMPORT ROUTES
const labRoutes = require("./route/lab");
const stationRoutes = require("./route/station");
const machineRoutes = require("./route/machine");
const testRoutes = require("./route/test");
const userRoutes = require("./route/user");
const componentRoutes = require("./route/component");
app.use(cors())

app.use("/api", labRoutes);
app.use("/api", stationRoutes);
app.use("/api", machineRoutes);
app.use("/api", testRoutes);
app.use("/api", userRoutes);
app.use("/api", componentRoutes);

const connectionString ="mongodb+srv://bilgeurcukk:pE4oJ7SqzWqTFx33@cluster0.na6zjgf.mongodb.net/"
const xyz = "mongodb+srv://kaganyalim19:TZaminz93TSS9GVw@cluster0.cg21pkx.mongodb.net/"


// CONNECT DATABASE

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('DB connected') )
  .catch((err)=> console.log(err));


// MIDDLEWARE



const port = process.env["PORT "] || 8000


app.listen(port, ()=>{
  console.log(`app is running on port ${port}`);
})
