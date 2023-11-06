import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Ui/Container";
import TakeAssignment from "./TakeAssignment";



const AssignmentDetails = () => {
    const singleAssignment = useLoaderData();
    const { title, difficulty, marks, thumbnail, description, date } = singleAssignment;
    return (
        <Container>
            <div className="flex flex-col-reverse md:flex-row h-screen items-center">
                <div className="space-y-3 flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold">{title}</h3>
                    <p className="md:text-xl">{description}</p>
                    <div className="flex gap-5">
                        <p className="font-semibold">Marks:{marks}</p>
                        <p className="font-semibold">Difficulty:{difficulty}</p>
                    </div>
                    <p>Due Date:{date.slice(0, 10)}</p>
                    <TakeAssignment singleAssignment={singleAssignment}></TakeAssignment>
                </div>
                <div className="flex-1">
                    <img src={thumbnail} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default AssignmentDetails;

