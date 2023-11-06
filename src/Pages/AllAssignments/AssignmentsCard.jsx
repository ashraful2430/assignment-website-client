
import PropTypes from 'prop-types';
import './assign.css'


const AssignmentsCard = ({ assignment }) => {
    const { title, difficulty, marks, thumbnail, description, date } = assignment;

    return (
        <>
            <section className='h-screen mt-4'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-10 max-w-6xl mx-auto mt-36 md:mt-64 lg:mt-0'>
                    <div className='flex-1'>
                        <img className='md:h-[400px]' src={thumbnail} alt="" />
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
                            <button
                                className="inline-block rounded bg-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500"

                            >
                                View Assignment
                            </button>
                            <button
                                className="inline-block rounded bg-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500"

                            >
                                Update Assignment
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

AssignmentsCard.propTypes = {
    assignment: PropTypes.object
};

export default AssignmentsCard;