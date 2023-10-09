import React from "react";
import StudentForm from "../components/StudentForm";
import { Link } from "react-router-dom";

function StudentData() {
    return(
        <div>
            <h1>Create a Student </h1>
            <Link to="/">Back to Student list</Link>
            <StudentForm/>
        </div>
    )
}

export default StudentData;