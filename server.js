require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose")


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/userroute")(app)


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});

