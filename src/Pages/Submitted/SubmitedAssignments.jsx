import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import TableRow from "./TableRow";


const SubmitedAssignments = () => {
    const [submitted, setSubmitted] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/submitted?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSubmitted(data);
                console.log(data);
            })
    }, [url])
    return (
        <div className="h-[70vh] lg:mt-44">
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitted.map(submit => <TableRow key={submit._id} submit={submit} ></TableRow>)
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
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default SubmitedAssignments;