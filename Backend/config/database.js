const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(()=>console.log("DB CONNECTION SUCCESSFULL"))
    .catch( (error) => {

        console.log("Issue in db");
        console.error(error.message);
        process.exit(1);

    })

}

module.exports = connectWithDb;