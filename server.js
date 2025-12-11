const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const server = express()
server.use(express.json())


server.use("/", require("./routes/productroute"))


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err))

server.listen(4000, () => console.log("Server started"))
