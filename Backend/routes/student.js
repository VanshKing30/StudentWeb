const express = require("express");
const router = express.Router();

const {createStudent} = require("../controllers/createStudent");
const {getStudents}  = require("../controllers/getStudents");

router.post("/createStudent" , createStudent);
router.get("/getStudents" , getStudents);
module.exports = router;