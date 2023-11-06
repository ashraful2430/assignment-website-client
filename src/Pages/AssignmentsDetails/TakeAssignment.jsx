import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const TakeAssignment = ({ singleAssignment }) => {
    const { title, marks } = singleAssignment;
    const { user } = useContext(AuthContext);
    const userName = user.displayName;
    const handleSubmitAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pdfLink = form.pdfLink.value;
        const note = form.note.value;
        const submittedAssignment = { email, pdfLink, note, title, marks, userName }
        console.log(submittedAssignment);
    }

    return (
        <>
            <button className="btn bg-red-500 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>
                Take Assignment
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Please submit the require information</h3>
                    <form onSubmit={handleSubmitAssignment}>
                        <div>
                            <label htmlFor="email" className="block text-sm text-black font-bold">Email Address</label>

                            <div className="relative flex items-center mt-2">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-3 text-gray-400 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    name="email"
                                    defaultValue={user.email}
                                    required
                                    className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                        </div>
                        <div className="my-3">
                            <label htmlFor="username" className="block text-sm text-black font-bold  ">PDF link</label>
                            <input
                                type="text"
                                name="pdfLink"
                                placeholder="PDF link"
                                required
                                className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                        </div>
                        <div>
                            <label htmlFor="Description" className="block text-sm text-black font-bold ">Quick Note</label>
                            <textarea placeholder="Note" name="note" className="block  mt-2 w-full placeholder-gray-400/70 0 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   "></textarea>
                        </div>
                        <div className="modal-action">

                            <button type="submit" className="btn bg-red-500 text-white" onClick={() => document.getElementById('my_modal_5').close()}>Submit</button>

                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

TakeAssignment.propTypes = {
    singleAssignment: PropTypes.object
};

export default TakeAssignment;