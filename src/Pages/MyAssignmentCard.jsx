
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const MyAssignmentCard = ({ assignments }) => {
    const { user } = useContext(AuthContext)
    const { email, title, userName, marks, thumbnail, date, status, feedBack, obtainMarks, difficulty } = assignments;

    return (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md ">
            <img className="object-cover w-full h-64" src={thumbnail} alt="Article" />

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase ">Assignment</span>
                    <div className='flex justify-between items-center'>
                        <a className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <p className='font-semibold block  text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>Difficulty: {difficulty}</p>
                        <p className='font-semibold block  text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>Status: {status}</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <p className='font-semibold block  text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>Marks:{marks}</p>
                        <p className='font-semibold block  text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>Obtain Marks:{obtainMarks}</p>
                    </div>
                    <div>
                        <p className='font-semibold block mt-2 text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'><span className=''>Feedback</span>:{feedBack}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={user.photoURL} alt="Avatar" />
                            <div className='flex flex-col items-center'>
                                <a className="mx-2 font-semibold text-gray-700 " tabIndex="0" role="link">{userName}</a>
                                <a className='text-xs'>{email}</a>
                            </div>
                        </div>
                        <span className="mx-1 text-xs text-gray-600 ml-5">{date.slice(0, 10)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyAssignmentCard.propTypes = {
    assignments: PropTypes.object
};

export default MyAssignmentCard;