/* eslint-disable react/no-unescaped-entities */
import './faq.css'
import { motion, useAnimation } from "framer-motion"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';




const Faq = () => {

    const { ref, inView } = useInView({ threshold: 1 });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring", duration: 3, bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation.start({ x: -'100vw' })
        }

    }, [animation, inView])


    return (
        <>
            <section>
                <motion.div animate={animation} ref={ref}>
                    <div>
                        <h3 id='animate' className="text-center text-xl md:text-4xl font-semibold relative ">Frequently Asked Question (FAQ's)</h3>
                    </div>

                    <section className="">
                        <div className="container px-6 py-12 mx-auto">


                            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                                <div>
                                    <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <h1 className="text-xl font-semibold text-gray-700 ">How do I submit an assignment on this platform?</h1>

                                        <p className="mt-2 text-sm text-gray-500 ">
                                            To submit an assignment, log in to your account, navigate to the 'My Assignments' section, and click on the assignment you wish to submit. Follow the on-screen instructions to upload your assignment file, add any required information, and click the 'Submit' button. You'll receive a confirmation once your assignment is successfully submitted.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <h1 className="text-xl font-semibold text-gray-700 ">Can I collaborate with others on assignments using this platform?</h1>

                                        <p className="mt-2 text-sm text-gray-500 ">
                                            Yes, you can! Our platform supports collaboration on assignments. You can invite fellow students to work on assignments together. Simply create a collaborative workspace, add team members, and start collaborating in real-time. It's a great way to work on group projects and share ideas.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <h1 className="text-xl font-semibold text-gray-700 ">How can I access assignment resources and templates on this website?</h1>

                                        <p className="mt-2 text-sm text-gray-500 ">
                                            Accessing assignment resources and templates is easy. Visit our 'Resource Library' section, where you'll find a wealth of educational materials, including templates, articles, and video tutorials. You can browse, search, and download these resources to assist with your assignment creation process. It's a valuable tool to enhance your academic work.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <h1 className="text-xl font-semibold text-gray-700 ">Can I check for plagiarism in my assignments on this platform?</h1>

                                        <p className="mt-2 text-sm text-gray-500 ">
                                            Yes, we provide a built-in plagiarism checker to help you ensure the originality of your work. Simply upload your assignment, and our tool will scan it for similarities against a vast database of academic content. This feature assists you in maintaining academic integrity and avoiding unintentional plagiarism.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <h1 className="text-xl font-semibold text-gray-700 "> How can I track the progress and grading of my submitted assignments?</h1>

                                        <p className="mt-2 text-sm text-gray-500 ">
                                            You can easily track your assignment progress and grades within your user profile. Once your assignment is submitted, you'll receive notifications and updates on its status. Additionally, your grades and instructor feedback will be accessible in the 'My Assignments' section, ensuring you stay informed about your academic performance.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <h1 className="text-xl font-semibold text-gray-700 ">What should I do if I encounter technical issues while creating or submitting an assignment?</h1>

                                        <p className="mt-2 text-sm text-gray-500 ">
                                            If you encounter technical issues, don't worry! We have a dedicated support team ready to assist you. Visit our 'Help Center' for troubleshooting guides and FAQs. If you need further assistance, feel free to contact our support team via email or live chat. We're here to help you resolve any technical challenges promptly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </section>


        </>
    );
};

export default Faq;