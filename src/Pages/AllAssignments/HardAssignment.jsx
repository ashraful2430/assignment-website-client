import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";
import { Link } from "react-router-dom";

const HardAssignment = () => {
    const [allAssignments, setAllAssignments] = useState([]);

    console.log(allAssignments);
    useEffect(() => {
        fetch(`http://localhost:5000/assignments?difficulty=hard`)
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
                    <div className='flex justify-center items-center h-[70vh] text-center'>
                        <div >
                            <p className='text-3xl font-bold '>Sorry no Assignment available</p>
                            <Link to={'/createAssignments'}>
                                <button className='btn bg-red-500 text-white mt-5'>Create Assignment</button>
                            </Link>
                        </div>
                    </div>
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