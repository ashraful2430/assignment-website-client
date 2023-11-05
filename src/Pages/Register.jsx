import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import { FaSquareFacebook } from 'react-icons/fa6'
import { BsGithub } from 'react-icons/bs'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import swal from "sweetalert";
import Container from "../Components/Ui/Container";


const Register = () => {
    const [showPass, setShowPass] = useState()
    const { signUp, handleProfile, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleSignIn = e => {
        e.preventDefault();
        googleSignIn()
            .then(result => {
                swal("Good job!", "User Loged in successfully!", "success");
                navigate(location?.state ? location.state : '/')
                console.log(result.user);
            })
            .catch(error => {
                const slicedMessage = error.message.slice(10, 50)
                swal("ERROR!", slicedMessage, "error");
                console.error(error);
            })
    }

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password };
        console.log(user);

        if (!/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/.test(password)) {
            swal("ERROR!", "Password should have one uppercase and one special character and should be at least 6 characters!", "error");
            return;
        }

        signUp(email, password)
            .then(result => {
                handleProfile(name)
                e.target.reset();
                console.log(result);
                swal("Good job!", "User created successfully!", "success");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                const slicedMessage = error.message.slice(10, 50)
                swal("ERROR!", slicedMessage, "error");
            })
    }

    return (
        <div>
            <Container>
                <section className="relative flex flex-col-reverse lg:flex-col flex-wrap lg:h-screen lg:items-center">
                    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-lg text-center">
                            <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>

                            <p className="mt-4 text-gray-500">
                                Welcome back! Log in to your account to access your assignments, create new assignments, and manage your academic work.
                            </p>
                        </div>

                        <form onSubmit={handleLogIn} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Name</label>

                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter Name"
                                    />

                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>

                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter email"
                                    />

                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>

                                <div className="relative">
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        name="password"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter password"
                                    />

                                    <span onClick={() => setShowPass(!showPass)} className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        {
                                            showPass ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>
                                        }
                                    </span>
                                </div>
                            </div>

                            <div className="">
                                <Link to={'/login'}>
                                    <p className="text-gray-400">Already have an account? <span className="font-bold text-blue-500 hover:cursor-pointer">Login here</span></p>
                                </Link>
                                <button
                                    className="inline-block mt-5 rounded w-full bg-blue-400 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-blue-400"
                                    type="submit"
                                >
                                    Sign up
                                </button>
                                <h1 className="font-semibold text-center my-4">Or Login with </h1>
                                <div className="flex justify-center items-center gap-4  mx-auto">
                                    <div>
                                        <button onClick={handleGoogleSignIn} className="btn btn-outline transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"><FcGoogle></FcGoogle>Log in</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"><FaSquareFacebook className="text-blue-400"></FaSquareFacebook>Log in</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"><BsGithub></BsGithub>Log in</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                        <img
                            alt="Welcome"
                            src="https://i.ibb.co/FVGdnrh/istockphoto-1438969575-1024x1024.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Register;