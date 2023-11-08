import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const EasyAssignment = ({ currentPage, itemPerPage }) => {

    const [allAssignments, setAllAssignments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/assignments?difficulty=easy&page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllAssignments(data);
            })
    }, [currentPage, itemPerPage])

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

EasyAssignment.propTypes = {
    currentPage: PropTypes.number.isRequired,
    itemPerPage: PropTypes.number.isRequired,
};

export default EasyAssignment;