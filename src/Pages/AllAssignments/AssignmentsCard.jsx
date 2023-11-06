
import PropTypes from 'prop-types';
import './assign.css'

const AssignmentsCard = ({ assignment }) => {
    const { title } = assignment;
    return (
        <>
            <section className='h-screen'>
                {title}
            </section>
        </>
    );
};

AssignmentsCard.propTypes = {
    assignment: PropTypes.object
};

export default AssignmentsCard;