import { useLoaderData, useNavigate } from 'react-router-dom';
import Container from '../../Components/Ui/Container';

import swal from 'sweetalert';

const GiveMark = () => {
    const markingAssignment = useLoaderData();

    const { marks, pdfLink, title, userName, _id } = markingAssignment;
    const navigate = useNavigate()
    const handleSubmitStatus = (e) => {
        e.preventDefault();
        const from = e.target;
        const obtainMarks = from.obtainMarks.value;
        const feedBack = from.feedback.value;
        const status = 'confirm'
        const update = { obtainMarks, feedBack, status };
        console.log(update);
        fetch(`http://localhost:5000/submitted/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    if (data.modifiedCount) {
                        swal("Well done!", "Assignment has been updated!", "success");
                        navigate('/assignments')
                    }
                }
            });
    };

    return (
        <>
            <Container>
                <div className="mx-auto max-w-screen-xl  px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg">
                        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                            Mark Giving Form
                        </h1>
                        <div className="form-control ">
                            <h3 className="font-bold text-lg">Examinee Name : {userName}</h3>
                            <h3 className="font-bold text-lg">Assignment Name: {title}</h3>
                            <p className="font-bold">Marks: {marks}</p>
                            <h2 className="font-bold text-lg">
                                PDF link:
                                <a
                                    className="font-semibold text-blue-400 text-sm md:text-base xl:text-xl leading-normal md:leading-normal lg:leading-relaxed xl:leading-relaxed"
                                    href={pdfLink}
                                >
                                    {pdfLink}
                                </a>
                            </h2>
                            <form onSubmit={handleSubmitStatus}>
                                <div>
                                    <label htmlFor="username" className="block text-sm mt-4">
                                        Marks
                                    </label>
                                    <input
                                        type="number"
                                        name="obtainMarks"
                                        required
                                        max={marks}
                                        className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-black bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="Description" className="block text-sm mt-4">
                                        Feedback
                                    </label>
                                    <textarea
                                        name="feedback"
                                        placeholder="Feedback..."
                                        className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-black bg-white px-4 h-24 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="block w-full rounded-lg mt-7 bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default GiveMark;
