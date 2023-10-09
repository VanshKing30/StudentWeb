import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function StudentForm() {

    const[formData, setFormData] = useState({fullname:"", email:"", department:"",year:"", rollno:"",  })

    const navigate = useNavigate();

    function changeHandler(event)
    {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
        navigate("/");
    }

    return(
        <div className="flex flex-col">

            <form onSubmit={submitHandler}>
                <div>
                    <label className="">
                        <p  className="">Full Name<sup>*</sup></p>

                        <input className=""  required type="text" name="fullname" placeholder="Enter Full Name" value={formData.fullname} onChange={changeHandler}></input>
                    </label>

                    <label className="">
                        <p  className="">Email id<sup>*</sup></p>

                        <input className=""  required type="email" name="email" placeholder="Enter email id" value={formData.email} onChange={changeHandler}></input>
                    </label>

                    <label className="">
                        <p  className="">Department<sup>*</sup></p>

                        <input className=""  required type="text" name="department" placeholder="Enter Department name" value={formData.department} onChange={changeHandler}></input>
                    </label>

                    <label className="">
                        <p  className="">Year<sup>*</sup></p>

                        <input className=""  required type="text" name="year" placeholder="Enter year of study" value={formData.year} onChange={changeHandler}></input>
                    </label>

                    <label className="">
                        <p  className="">Roll no<sup>*</sup></p>

                        <input className=""  required type="text" name="rollno" placeholder="Enter your roll no" value={formData.rollno} onChange={changeHandler}></input>
                    </label>
                </div>
                
                <button>Submit Details</button>

            </form>
            

        </div>
    )
}

export default StudentForm;