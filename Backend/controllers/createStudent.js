

const studentSchema = require("../models/studentSchema");

exports.createStudent = async (req,res) =>{
    try{
        const {name , email , department , rollNo , yearOfStudy } = req.body;

        const response = await studentSchema.create({name , email , department , rollNo , yearOfStudy});

        res.status(200).json({
            success : true,
            data : response,
            message : "Entry Created Succesfully"
        })
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success : false,
            data : "internal server error",
            message : error.message
        })
    }
}
