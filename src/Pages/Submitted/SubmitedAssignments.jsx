import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import TableRow from "./TableRow";
import { Link, } from "react-router-dom";


const SubmitedAssignments = () => {

    const [submitted, setSubmitted] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/submitted?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSubmitted(data);
                console.log(data);
            })
    }, [url])
    return (
        <>
            <div className="h-[70vh] lg:mt-44">
                {submitted.length < 1
                    ?
                    <>
                        <div className="" style={{ height: '50vh', textAlign: 'center' }} >
                            <p className="text-center font-semibold text-3xl"> You have not submitted any assignments yet</p>
                            <Link to={'/assignments'}>
                                <button className="text-center btn btn-outline mt-4 bg-red-500 text-white">See All Assignments</button>
                            </Link>
                        </div>
                    </>
                    :
                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead>
                                <tr>
                                    <th>

                                    </th>
                                    <th>Examinee Name</th>
                                    <th>Assignment Name</th>
                                    <th>Marks</th>
                                    <th>Status</th>
                                    <th>Marking</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    submitted.map(submit => <TableRow
                                        key={submit._id}
                                        submit={submit}

                                    ></TableRow>)
                                }
                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Examinee Name</th>
                                    <th>Assignment Name</th>
                                    <th>Marks</th>
                                    <th>Status</th>
                                    <th>Marking</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                }
            </div>
        </>
    );
};

export default SubmitedAssignments;