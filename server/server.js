import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import records from "./routes/api.js";
import passport from "passport";

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/api", records);
app.use(bodyParser.json());


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listeninggg on port ${PORT}\n http://localhost:5050/`);
});

