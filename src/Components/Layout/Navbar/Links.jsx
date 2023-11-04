import { NavLink, Link } from "react-router-dom";
import Container from "../../Ui/Container";
import logo from "../../../assets/SharedScreenshot.jpg"


const Links = () => {
    return (

        <div className="w-full navbar bg-base-100 shadow-xl">
            <Container>
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <Link to={'/'}>
                        <img className="w-36" src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex-none hidden lg:block">
                    <div className="flex items-center gap-4">
                        {/* Navbar menu content here */}
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
                </div>
            </Container>
        </div>
    );
};

export default Links;