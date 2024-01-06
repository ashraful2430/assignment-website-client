import { Link } from "react-router-dom";
import useRecent from "../../../Hooks/useRecent";
import RecentDetails from "./RecentDetails";

const Recent = () => {
  const [recents, isLoading] = useRecent();
  return (
    <>
      <p className="text-center mt-14 font-semibold text-4xl">
        Recent Assignments
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {recents.slice(0, 3).map((recent, index) => (
          <RecentDetails
            key={recent._id}
            recent={recent}
            index={index}
            isLoading={isLoading}
          ></RecentDetails>
        ))}
      </div>
      <Link to={"/assignments"}>
        <div className="text-center">
          <button className="inline-block rounded  mt-5 bg-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500">
            Sell All
          </button>
        </div>
      </Link>
    </>
  );
};

export default Recent;
