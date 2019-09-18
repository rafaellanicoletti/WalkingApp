const express = require("express");
var path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();


app.listen(PORT, function(){
    console.log("listening on port " + PORT);
});

