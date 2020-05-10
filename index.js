// import libraries
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

// wire up mongoose to app
mongoose.connect(keys.mongoURI);

// set up config and pass authRoutes
const app = express();
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
