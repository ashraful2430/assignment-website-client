import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecentDetails = ({ recent, isLoading, index }) => {
  const { title, difficulty, thumbnail, description, _id } = recent;
  if (isLoading) {
    return <p className="text-2xl font-medium text-center">Loading</p>;
  }
  return (
    <>
      <div className="group relative block bg-black hover:cursor-pointer">
        <img
          alt="Assignments"
          src={thumbnail}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            {difficulty}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white mb-4">{description}</p>

              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="inline-block rounded w-full bg-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500"
                onClick={() => document.getElementById(`${index}`).showModal()}
              >
                Quick Overview
              </button>
              <dialog id={index} className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div>
                    <h3 className="font-bold text-xl">{title}</h3>
                    <h3 className="font-bold text-base uppercase">
                      Difficulty: {difficulty}
                    </h3>
                  </div>
                  <p className="py-4">{description}</p>
                  <Link to={`/assignmentDetails/${_id}`}>
                    <div>
                      <button className="inline-block rounded w-full bg-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500 mt-3">
                        View Details
                      </button>
                    </div>
                  </Link>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

RecentDetails.propTypes = {
  recent: PropTypes.object,
  isLoading: PropTypes.bool,
  index: PropTypes.number,
};

export default RecentDetails;
