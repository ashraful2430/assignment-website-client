
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const TableRow = ({ submit }) => {
    const { user } = useContext(AuthContext);
    const { email, title, userName, marks } = submit;
    return (
        <tr>
            <th>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                        <div>{email}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className='font-bold'>{title}</p>
            </td>
            <td>{marks}</td>
            <td>Pending</td>
            <th>
                <button className="btn btn-ghost btn-xs bg-red-500 text-white">Give marks</button>
            </th>
        </tr>


    );
};

TableRow.propTypes = {
    submit: PropTypes.object
};

export default TableRow;