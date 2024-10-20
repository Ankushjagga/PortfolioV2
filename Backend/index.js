require("dotenv").config();

const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const connect = require("./db/connection");
const cors = require("cors")

const cookieParser = require("cookie-parser")

app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(cors())
// app.use(cookieParser)
app.use("/auth", authRoutes)
app.use("/user", userRoutes )


app.get("/",(req,res)=>{
res.status(200).send("Backend working perfectly")
})


app.listen(process.env.PORT,()=>{
    connect()
    console.log(`server running at ${process.env.PORT}`);
    
})


