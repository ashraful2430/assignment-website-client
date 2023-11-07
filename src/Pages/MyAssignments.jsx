import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import MyAssignmentCard from "./MyAssignmentCard";



const MyAssignments = () => {

    const [submitted, setSubmitted] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/submitted?email=${user?.email}`;
    console.log(submitted);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSubmitted(data);

            })
    }, [url])
    return (
        <div>
            {
                submitted.length === 0 ?
                    <>
                        <p className="text-3xl font-bold text-center h-screen pt-32">You do not have any assignment submitted</p>
                    </>
                    :
                    <>
                        <div>
                            <h3>My Assignments</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {
                                    submitted.map(assignments => <MyAssignmentCard key={assignments._id} assignments={assignments}></MyAssignmentCard>)
                                }
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyAssignments;