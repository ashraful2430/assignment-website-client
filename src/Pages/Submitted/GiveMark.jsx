
import { useLoaderData } from 'react-router-dom';
import Container from '../../Components/Ui/Container';

const GiveMark = () => {
    const markingAssignment = useLoaderData();
    const { marks, pdfLink, title, userName, _id } = markingAssignment;

    const handleSubmitStatus = id => {
        fetch(`http://localhost:5000/submitted/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <>
            <Container>

                <div className="mx-auto max-w-screen-xl  px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg">
                        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                            Mark Giving Form
                        </h1>
                        <form
                            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                        >


                            <div className="form-control ">
                                <h3 className='font-bold text-lg'>Examinee Name : {userName}</h3>
                                <h3 className='font-bold text-lg'>Assignment Name: {title}</h3>
                                <p className='font-bold'>Marks: {marks}</p>
                                <h2 className='font-bold text-lg'>PDF link: <a className='font-semibold text-blue-400' href={pdfLink}>{pdfLink}</a></h2>
                                <div>
                                    <label htmlFor="username" className="block text-sm mt-4 ">Marks</label>
                                    <input type="number" required max={marks} className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-black bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                                </div>
                                <div>
                                    <label htmlFor="Description" className="block text-sm mt-4 ">Feedback</label>
                                    <textarea name='feedback' placeholder="Feedback..." className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-black bg-white px-4 h-24 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "></textarea>

                                </div>
                            </div>

                            <button
                                type="submit"
                                onClick={() => handleSubmitStatus(_id)}
                                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </Container>

        </>
    );
};



export default GiveMark;