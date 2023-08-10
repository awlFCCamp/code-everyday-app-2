require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const challengeRoutes = require("./routes/challenges");
const userRoutes = require("./routes/user");

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use(cors());
app.use("/api/challenges", challengeRoutes);
app.use("/api/user", userRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
