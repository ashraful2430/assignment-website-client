

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SubmitMark from "./SubmitMark";

const SubmitedAssignments = () => {
    const testVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        exit: {
            x: 500,
            opacity: 0,
        },
    };

    const [submitted, setSubmitted] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/submitted?status=pending") // Fetch only 'confirm' assignments
            .then((res) => res.json())
            .then((data) => {
                setSubmitted(data);
                console.log(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            {submitted.length === 0 ? (
                <div style={{ height: "50vh", textAlign: "center" }}>
                    <p className="text-center font-semibold text-3xl">
                        You have no pending assignments.
                    </p>
                    <Link to={"/assignments"}>
                        <button className="text-center btn btn-outline mt-4 bg-red-500 text-white">
                            See All Assignments
                        </button>
                    </Link>
                </div>
            ) : (
                <motion.div
                    variants={testVariants}
                    initial="initial"
                    animate="animate"
                    className="h-[70vh] lg:mt-44"
                >
                    <div className="mb-14 -mt-20">
                        <h3 className="text-4xl text-center font-semibold">All Confirm Assignments</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-screen">
                        {submitted.map((submit) => (
                            <SubmitMark key={submit._id} submit={submit} />
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default SubmitedAssignments;
