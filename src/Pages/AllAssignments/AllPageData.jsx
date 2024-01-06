import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AssignmentsCard from "./AssignmentsCard";
import { Link } from "react-router-dom";

const AllPageData = ({ currentPage, itemPerPage }) => {
  console.log(currentPage, itemPerPage);
  const [allAssignments, setAllAssignments] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/assignments?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllAssignments(data);
      });
  }, [currentPage, itemPerPage]);

  return (
    <>
      {allAssignments.length === 0 ? (
        <>
          <div className="flex justify-center items-center h-[70vh] text-center">
            <div>
              <p className="text-3xl font-bold ">
                Sorry no Assignment available
              </p>
              <Link to={"/createAssignments"}>
                <button className="btn bg-red-500 text-white mt-5">
                  Create Assignment
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="">
          {allAssignments.map((assignment) => (
            <AssignmentsCard
              key={assignment._id}
              assignment={assignment}
            ></AssignmentsCard>
          ))}
        </div>
      )}
    </>
  );
};

AllPageData.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemPerPage: PropTypes.number.isRequired,
};

export default AllPageData;
