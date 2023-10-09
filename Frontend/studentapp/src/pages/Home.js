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
        <div className="Parent">

            
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


            <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Role
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {studData?.data.map((person) => (
                      <tr key={person.name}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              {/* <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              /> */}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-300">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.department}
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {person.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>





        </div>


        


    )
}

export default Home;