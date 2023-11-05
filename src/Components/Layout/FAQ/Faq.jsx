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
                    type: 'spring', duration: 3, bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation.start({ x: -'100vw' })
        }

    }, [animation, inView])


    return (
        <>
            <motion.div animate={animation} ref={ref}>
                <div>
                    <h3 id='animate' className="text-center text-xl md:text-4xl font-semibold relative ">Frequently Asked Question (FAQ's)</h3>
                </div>

                <div className='space-y-5 mt-7'>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-bold  text-black">
                            FAQ 1: How do I submit an assignment on this platform?
                        </div>
                        <div className="collapse-content">
                            <p className='font-medium text-gray-500'>Answer :To submit an assignment, log in to your account, navigate to the 'My Assignments' section, and click on the assignment you wish to submit. Follow the on-screen instructions to upload your assignment file, add any reFAquired information, and click the 'Submit' button. You'll receive a confirmation once your assignment is successfully submitted.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-bold text-black ">
                            FAQ 2: Can I collaborate with others on assignments using this platform?
                        </div>
                        <div className="collapse-content">
                            <p className='font-medium text-gray-500'>Answer: Yes, you can! Our platform supports collaboration on assignments. You can invite fellow students to work on assignments together. Simply create a collaborative workspace, add team members, and start collaborating in real-time. It's a great way to work on group projects and share ideas.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-bold text-black ">
                            FAQ 3: How can I access assignment resources and templates on this website?
                        </div>
                        <div className="collapse-content">
                            <p className='font-medium text-gray-500'>Answer: Accessing assignment resources and templates is easy. Visit our 'Resource Library' section, where you'll find a wealth of educational materials, including templates, articles, and video tutorials. You can browse, search, and download these resources to assist with your assignment creation process. It's a valuable tool to enhance your academic work.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-bold text-black ">
                            FAQ 4: Can I check for plagiarism in my assignments on this platform?
                        </div>
                        <div className="collapse-content">
                            <p className='font-medium text-gray-500'>Answer: Yes, we provide a built-in plagiarism checker to help you ensure the originality of your work. Simply upload your assignment, and our tool will scan it for similarities against a vast database of academic content. This feature assists you in maintaining academic integrity and avoiding unintentional plagiarism.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-bold text-black ">
                            FAQ 5: How can I track the progress and grading of my submitted assignments?
                        </div>
                        <div className="collapse-content">
                            <p className='font-medium text-gray-500'>Answer:You can easily track your assignment progress and grades within your user profile. Once your assignment is submitted, you'll receive notifications and updates on its status. Additionally, your grades and instructor feedback will be accessible in the 'My Assignments' section, ensuring you stay informed about your academic performance.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

        </>
    );
};

export default Faq;