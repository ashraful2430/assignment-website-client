
import './featured.css'

const Featured = () => {

    return (
        <>
            <div>
                <h3 id='effect' className="text-center text-4xl font-semibold relative ">Our Features</h3>
            </div>
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div className="grid  grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                            <div className="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Empowering Student Success: Our Key Features</h2>
                                    <p className="mt-4 text-gray-500">
                                        Discover how our platform is designed to make your academic journey smoother and more efficient. We offer a range of powerful features to help you excel in your studies, streamline your assignments, and enhance your learning experience.
                                    </p>
                                </header>
                                <button
                                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                >
                                    See All
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid md:grid-cols-3 gap-4">
                                <li>
                                    <div className="block group">
                                        <img
                                            src="https://i.ibb.co/1MDRpRx/istockphoto-844357070-1024x1024.jpg"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />
                                        <div className="mt-3">
                                            <h3
                                                className="font-bold text-xl text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Assignment Planner and Organizer
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-700">Provide students with a digital assignment planner and organizer. They can schedule assignment due dates, set reminders, and receive notifications to stay on top of their academic workload. </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="block group">
                                        <img
                                            src="https://i.ibb.co/0njhPZF/istockphoto-1443245439-1024x1024.jpg"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />
                                        <div className="mt-3">
                                            <h3
                                                className="font-bold text-xl text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Collaborative Workspaces
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-700">Create virtual collaborative workspaces where students can collaborate on assignments in real-time. They can co-edit documents, exchange ideas, and communicate seamlessly within the platform.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="block group">
                                        <img
                                            src="https://i.ibb.co/tYKGWrr/istockphoto-639330984-1024x1024.jpg"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />
                                        <div className="mt-3">
                                            <h3
                                                className="font-bold text-xl text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Academic Resource Repository
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-700">Develop a comprehensive resource library with a vast collection of academic materials, including textbooks, research papers, templates, and educational videos.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Featured;