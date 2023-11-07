
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubmitMark = ({ submit }) => {
    const { thumbnail, title, userName, marks, _id } = submit
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={thumbnail} alt="" className='h-52' /></figure>
                <div className="card-body w-full">
                    <h2 className="card-title">{title}</h2>
                    <div className='space-y-4 w-full'>
                        <p className='font-bold '>Examinee Name:{userName}</p>
                        <p className='font-bold text-base'>Marks:{marks}</p>
                    </div>
                    <Link to={`/markAssignment/${_id}`}>
                        <div className="card-actions w-full">
                            <button className="btn bg-red-500 text-white w-full">Give mark</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

SubmitMark.propTypes = {
    submit: PropTypes.object
};

export default SubmitMark;