




import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Document, Page } from 'react-pdf';

const MarkSubmit = () => {
    const gotData = useLoaderData();
    const { title, pdfLink, note, marks, _id } = gotData;
    const navigate = useNavigate();

    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleSubmitMark = (e) => {
        e.preventDefault();
        const form = e.target;
        const obtainMarks = form.obtainMarks.value;
        const feedBack = form.feedBack.value;
        const status = 'completed';
        const update = { obtainMarks, feedBack, status };

        fetch(`http://localhost:5000/submitted/${_id}`, {
            credentials: 'include',
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
                    swal('Well done!', 'Assignment has been updated!', 'success');
                    navigate('/submittedAssignments');
                }
            });
    };

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-base-100 shadow-xl">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Marking page</h1>
                </div>
                <form
                    onSubmit={handleSubmitMark}
                    className="mx-auto mb-0 mt-8 max-w-md space-y-4 bg-base-100 shadow-lg px-3 py-3"
                >
                    <div className="font-bold space-y-4">
                        <p className="text-lg">Assignment Name: {title}</p>
                        <p>PDF Link: {pdfLink}</p>
                        <p>Note: {note}</p>
                    </div>
                    <div>
                        <label htmlFor="email" className="font-bold text-xl">
                            Marks
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                name="obtainMarks"
                                max={marks}
                                className="w-full rounded-lg border-black p-4 pe-12 text-sm shadow-sm bg-gray-100"
                                placeholder="Marks"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="font-bold text-xl">
                            Feedback
                        </label>
                        <div className="relative">
                            <textarea
                                type=""
                                name="feedBack"
                                className="w-full rounded-lg border-black p-4 pe-12 text-sm bg-gray-100 shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-red-500 w-full px-5 py-3 text-sm font-medium text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg">
                    <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
};

export default MarkSubmit;
