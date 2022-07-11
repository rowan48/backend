const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Routers
const playersRouter = require("./routes/players");
const sportsRouter = require("./routes/sports");
const regionRouter=require("./routes/regions");
const Player = require("./models/Player");

// Routes
// app.patch('/api/players/card/:id/update', upload.single('img'), async function (req, res) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//     console.log("up")
//     console.log(req.params.id)
//     console.log(req.body.img.img.toString())
//     console.log(req.file)
//     const player= await Player.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
//     //console.log(player)
//     res.send(player);
// })
app.use("/api/players", playersRouter);
app.use("/api/sports",sportsRouter);
app.use("/api/regions",regionRouter);


module.exports = app;
