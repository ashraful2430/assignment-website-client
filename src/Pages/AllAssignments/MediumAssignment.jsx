import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";

const MediumAssignment = () => {
    const [allAssignments, setAllAssignments] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/assignments?difficulty=medium`)
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

export default MediumAssignment;