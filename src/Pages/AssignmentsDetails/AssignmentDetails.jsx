import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../Components/Ui/Container";
import TakeAssignment from "./TakeAssignment";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import swal from "sweetalert";

const AssignmentDetails = () => {
  const singleAssignment = useLoaderData();

  const {
    title,
    difficulty,
    marks,
    thumbnail,
    description,
    date,
    userEmail,
    _id,
  } = singleAssignment;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    if (user.email === userEmail) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Assignment!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          fetch(`https://y-topaz-chi.vercel.app/assignments/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                swal("Poof! Your assignment has been deleted!", {
                  icon: "success",
                });

                navigate("/");
              }
            });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    } else {
      swal("Sorry!", "You can not delete this!", "error");
    }
  };

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
          <div>
            <TakeAssignment
              description={description}
              date={date}
              thumbnail={thumbnail}
              singleAssignment={singleAssignment}
            ></TakeAssignment>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline bg-red-500 text-white"
            >
              Delete Assignment
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={thumbnail} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default AssignmentDetails;
