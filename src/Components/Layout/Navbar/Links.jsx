import { NavLink, Link } from "react-router-dom";
import Container from "../../Ui/Container";
import logo from "../../../assets/SharedScreenshot.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Links = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-full navbar bg-base-100 shadow-xl">
      <Container>
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link to={"/"}>
            <img className="w-36" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none hidden lg:block mr-28">
          <div className="flex items-center gap-4">
            {/* Navbar menu content here */}
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? " bg-none text-red-500 font-bold"
                  : "hover:text-red-300 transition duration-100"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/assignments"}
              className={({ isActive }) =>
                isActive
                  ? " bg-none text-red-500 font-bold"
                  : "hover:text-red-300 transition duration-100"
              }
            >
              Assignments
            </NavLink>
            <NavLink
              to={"/createAssignments"}
              className={({ isActive }) =>
                isActive
                  ? " bg-none text-red-500 font-bold"
                  : "hover:text-red-300 transition duration-100"
              }
            >
              Create Assignments
            </NavLink>
            {user && (
              <>
                <NavLink
                  to={"/myAssignments"}
                  className={({ isActive }) =>
                    isActive
                      ? " bg-none text-red-500 font-bold"
                      : "hover:text-red-300 transition duration-100"
                  }
                >
                  My Assignments
                </NavLink>
                <NavLink
                  to={"/submittedAssignments"}
                  className={({ isActive }) =>
                    isActive
                      ? " bg-none text-red-500 font-bold"
                      : "hover:text-red-300 transition duration-100"
                  }
                >
                  Submitted Assignments
                </NavLink>
              </>
            )}
          </div>
        </div>
        {user?.email ? (
          <div className="dropdown dropdown-end z-50">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="font-medium">{user.displayName}</p>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm  btn-ghost transition hover:scale-110 hover:shadow-xl focus:outline-none"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white bg-red-500 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-pink-500">
              Login
            </button>
          </Link>
        )}
        <div></div>
      </Container>
    </div>
  );
};

export default Links;
