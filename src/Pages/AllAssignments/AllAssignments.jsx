
import { useLoaderData } from 'react-router-dom';
import AssignmentsCard from './AssignmentsCard';
import { motion, useScroll, useSpring } from 'framer-motion'


const AllAssignments = () => {
    const allAssignments = useLoaderData();

    const { scrollYProgress } = useScroll();
    const reverseStiffness = 100;
    const reverseDamping = 30;
    const scaleX = useSpring(scrollYProgress, {
        stiffness: reverseStiffness,
        damping: reverseDamping,
        restDelta: 0.003,
    });

    return (
        <div className="relative">
            <section >
                <div className='sticky top-0 left-0 z-10'>
                    <h1 className='mt-16 text-4xl font-bold text-center '>All Assignments</h1>
                    <motion.div style={{ scaleX }} id='progressbar' className='h-2 bg-black '></motion.div>
                </div>
                {
                    allAssignments.map(assignment => <AssignmentsCard key={assignment._id} assignment={assignment}></AssignmentsCard>)
                }
            </section>
        </div>
    );
};

export default AllAssignments;