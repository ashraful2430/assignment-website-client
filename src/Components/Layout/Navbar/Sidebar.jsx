import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
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
            <NavLink to={'/login'}
                className={({ isActive }) =>
                    isActive ?
                        ' bg-none text-red-500 font-bold'
                        : ''}>
                Log in
            </NavLink>
        </div>
    );
};

export default Sidebar;