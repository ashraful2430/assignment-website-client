import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SubmitMark from "./SubmitMark";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import Container from "../../Components/Ui/Container";

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

  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    fetch("https://y-topaz-chi.vercel.app/submitted?status=pending", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <div className="pb-20">
          {submitted === null ? (
            <p className="flex justify-center items-center font-bold text-4xl">
              Loading...
            </p>
          ) : submitted.length === 0 ? (
            <div
              className="flex items-center justify-center"
              style={{ height: "50vh", textAlign: "center" }}
            >
              <div>
                <p className="text-center font-semibold text-3xl ">
                  You have no pending assignments.
                </p>
                <Link to={"/assignments"}>
                  <button className="text-center btn btn-outline mt-4 bg-red-500 text-white">
                    See All Assignments
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <motion.div
              variants={testVariants}
              initial="initial"
              animate="animate"
              className="h-[70vh] lg:mt-44"
            >
              <div className="mb-14 -mt-20">
                <h3 className="text-4xl text-center font-semibold">
                  All Pending Assignments
                </h3>
              </div>
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  {submitted.map((submit) => (
                    <SubmitMark key={submit._id} submit={submit} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Container>
    </>
  );
};

export default SubmitedAssignments;
