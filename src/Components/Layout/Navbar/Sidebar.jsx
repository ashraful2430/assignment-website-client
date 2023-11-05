import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Sidebar = () => {
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
        <div className='flex flex-col gap-2 justify-center items-center z-30'>
            <NavLink to={'/'}
                className={({ isActive }) =>
                    isActive ?
                        ' bg-none text-red-500 font-bold'
                        : ''}>
                Home
            </NavLink>
            <NavLink to={'/assignments'}
                className={({ isActive }) =>
                    isActive ?
                        ' bg-none text-red-500 font-bold'
                        : ''}>
                Assignments
            </NavLink>
            <NavLink to={'/createAssignments'}
                className={({ isActive }) =>
                    isActive ?
                        ' bg-none text-red-500 font-bold'
                        : ''}>
                Create Assignments
            </NavLink>
            {user &&
                <>
                    <NavLink to={'/myAssignments'}
                        className={({ isActive }) =>
                            isActive ?
                                ' bg-none text-red-500 font-bold'
                                : ''}>
                        My Assignments
                    </NavLink>
                    <NavLink to={'/submittedAssignments'}
                        className={({ isActive }) =>
                            isActive ?
                                ' bg-none text-red-500 font-bold'
                                : ''}>
                        Submitted Assignments
                    </NavLink>
                    <button onClick={handleLogOut}>Log out</button>
                </>
            }
        </div>
    );
};

export default Sidebar;