const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");

require('./config/dbConnect.js');

const PORT = 3000;
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

module.exports = app;
