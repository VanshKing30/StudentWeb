const express = require("express");
const app = express();

require("dotenv").config();


const PORT = process.env.PORT || 4000;

app.use(express.json());

const studRoutes = require("./routes/student");
app.use("/api/v1" , studRoutes);

app.listen(PORT , ()=>{
    console.log(`SERVER STARTED SUCCESSFULLY AT ${PORT}`);
})

const connectWithDb = require("./config/database");
connectWithDb();

app.get("/" , (req , res)=>{
    res.send(`<h1>This is My Homepage Baby</h1>`);
});

