import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";

const HardAssignment = () => {
    const [allAssignments, setAllAssignments] = useState([]);

    console.log(allAssignments);
    useEffect(() => {
        fetch(`http://localhost:5000/assignments?difficulty=easy`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllAssignments(data);
            })
    }, [])

    return (
        <>
            {allAssignments.length === 0 ?
                <>
                    <h3>No Hard Assignment</h3>
                </>
                :
                <div>
                    {
                        allAssignments.map(assignment => <AssignmentsCard key={assignment._id} assignment={assignment}></AssignmentsCard>)
                    }
                </div>}
        </>
    );
};

export default HardAssignment;