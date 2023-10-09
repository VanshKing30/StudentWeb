

const studentSchema = require("../models/studentSchema");


exports.getStudents = async ( req , res) => {
    try{
        const studentData = await studentSchema.find({});
        res.status(200)
        .json({
            success : true,
            data : studentData,
            message : "Entire Student Data is fetched"
        });
    }
    catch(error){
        res.status(500).json({success : false , error : error});
    }
}
