

import { motion, useScroll, useSpring } from 'framer-motion'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllPageData from './AllPageData';
import EasyAssignment from './EasyAssignment';
import MediumAssignment from './MediumAssignment';
import HardAssignment from './HardAssignment';




const AllAssignments = () => {


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
                <Tabs>
                    <TabList className='font-bold mt-5' style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Tab>All</Tab>
                        <Tab>Easy</Tab>
                        <Tab>Medium</Tab>
                        <Tab>Hard</Tab>
                    </TabList>

                    <TabPanel>
                        <AllPageData></AllPageData>
                    </TabPanel>
                    <TabPanel>
                        <EasyAssignment></EasyAssignment>
                    </TabPanel>
                    <TabPanel>
                        <MediumAssignment></MediumAssignment>
                    </TabPanel>
                    <TabPanel>
                        <HardAssignment></HardAssignment>
                    </TabPanel>

                </Tabs>

            </section>
        </div>
    );
};

export default AllAssignments;