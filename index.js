// import libraries
const express = require("express");
require("./services/passport");

// set up config and pass authRoutes
const app = express();
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
