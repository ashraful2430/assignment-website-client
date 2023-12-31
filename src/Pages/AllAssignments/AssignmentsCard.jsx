
import PropTypes from 'prop-types';
import './assign.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const AssignmentsCard = ({ assignment }) => {
    const { title, difficulty, marks, thumbnail, description, date, _id } = assignment;

    const testVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        },
        exit: {
            x: 500,
            opacity: 0,
        }
    }


    return (
        <>
            <section className='lg:h-[80vh] mt-4'>
                <motion.div variants={testVariants} initial="initial" animate="animate" className='flex flex-col lg:flex-row justify-center items-center gap-10 max-w-6xl mx-auto mt-36 md:mt-64 lg:mt-0'>
                    <div className='flex-1'>
                        <img className='h-[400px] w-[500px]' src={thumbnail} alt="" />
                    </div>
                    <div className='flex-1 space-y-4'>
                        <h3 className='text-3xl font-semibold'>{title}</h3>
                        <div className='flex items-center gap-10'>
                            <p className='font-medium text-xl'>Marks :{marks} </p>
                            <p className='font-medium text-xl'>Difficulty :{difficulty}</p>
                        </div>
                        <p className='font-medium text-lg text-gray-500'>{description}</p>
                        <p className='font-medium '>Due Date: {date.slice(0, 10)}</p>
                        <div className='flex flex-col gap-3'>
                            <Link to={`/assignmentDetails/${_id}`}>
                                <button
                                    className="inline-block rounded w-full bg-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500"

                                >
                                    View Assignment
                                </button>
                            </Link>
                            <Link to={`/updateAssignments/${_id}`}>
                                <button
                                    className="inline-block rounded w-full bg-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500"

                                >
                                    Update Assignment
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

AssignmentsCard.propTypes = {
    assignment: PropTypes.object
};

export default AssignmentsCard;