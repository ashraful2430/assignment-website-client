import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import MyAssignmentCard from "./MyAssignmentCard";

const MyAssignments = () => {
  const [submitted, setSubmitted] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/submitted/personal?email=${user?.email}`;

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSubmitted(data);
        } else {
          setSubmitted([]);
        }
      });
  }, [url]);

  return (
    <div>
      {submitted.length === 0 ? (
        <p className="text-3xl font-bold text-center h-screen pt-32">
          You do not have any assignments submitted
        </p>
      ) : (
        <div>
          <h3 className="text-center my-10 text-3xl font-semibold">
            My Assignments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {submitted.map((assignments) => (
              <MyAssignmentCard
                key={assignments._id}
                assignments={assignments}
              ></MyAssignmentCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAssignments;
