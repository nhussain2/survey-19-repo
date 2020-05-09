// import libraries
const express = require("express");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

// set up config to listen to incoming reqs for route handlers
const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
