import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";


const EasyAssignmentTab = () => {
    const [easy, setEasy] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/assignments?difficulty=easy`)
            .then(res => res.json())
            .then(data => {
                setEasy(data);
            })
    }, [])

    return (
        <div>
            {
                easy.map(assignment => <AssignmentsCard assignment={assignment} key={assignment._id}></AssignmentsCard>)
            }
        </div>
    );
};

export default EasyAssignmentTab;