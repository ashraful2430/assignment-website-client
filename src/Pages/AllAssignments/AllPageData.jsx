import { useEffect, useState } from 'react';

import AssignmentsCard from './AssignmentsCard';

const AllPageData = () => {

    const [allAssignments, setAllAssignments] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/assignments')
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

AllPageData.propTypes = {

};

export default AllPageData;