import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    const[studData , setStudData] = useState();

    const getAllData = async () => {
        try{
            const getStud = await fetch(
                `${process.env.REACT_APP_BASE_URL}/getStudents`,
                {
                    method: "GET",
                    headers : {
                        "Content-type" : "application/json",
                    },
                }
            );

            const res = await getStud.json();
            setStudData(res);

        }

        catch(error){
            console.log(error);
        }
    };

    useEffect( () => {
        getAllData();
    }, [])
        
    

    return(
        <div>
            <div className="flex justify-around">
                <div>
                    <h1>Student Data</h1>
                    <p>This is list of all students along with their necessary information.</p>
                </div>
                <div>
                    <Link to="/addstudent">
                        <button>Add Student</button>
                    </Link>
                </div>
            </div>  
        </div>

        


    )
}

export default Home;