import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";


const EasyAssignment = () => {
    const [allAssignments, setAllAssignments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/assignments?difficulty=easy`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllAssignments(data);
            })
    }, [])

    return (
        <div>
            {
                allAssignments.map(assignment => <AssignmentsCard key={assignment._id} assignment={assignment}></AssignmentsCard>)
            }
        </div>
    );
};

export default EasyAssignment;