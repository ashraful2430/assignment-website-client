import { useLoaderData } from "react-router-dom";


const AssignmentDetails = () => {
    const singleAssignment = useLoaderData();
    const { title } = singleAssignment;
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default AssignmentDetails;