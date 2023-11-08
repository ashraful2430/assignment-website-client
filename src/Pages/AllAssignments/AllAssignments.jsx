

import { motion, useScroll, useSpring } from 'framer-motion'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllPageData from './AllPageData';
import EasyAssignment from './EasyAssignment';
import MediumAssignment from './MediumAssignment';
import HardAssignment from './HardAssignment';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';




const AllAssignments = () => {
    const { count } = useLoaderData();
    const [itemPerPage, setItemPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState();

    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];

    console.log(pages);
    const handleItemPerPage = e => {
        const val = parseInt(e.target.value);
        setItemPerPage(val);
        setCurrentPage(0)
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    const { scrollYProgress } = useScroll();
    const reverseStiffness = 200;
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
                <Tabs onSelect={() => setCurrentPage(0)}>
                    <TabList className='font-bold mt-5' style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Tab>All</Tab>
                        <Tab>Easy</Tab>
                        <Tab>Medium</Tab>
                        <Tab>Hard</Tab>
                    </TabList>

                    <TabPanel>
                        <AllPageData currentPage={currentPage} itemPerPage={itemPerPage}></AllPageData>
                    </TabPanel>
                    <TabPanel>
                        <EasyAssignment currentPage={currentPage} itemPerPage={itemPerPage}></EasyAssignment>
                    </TabPanel>
                    <TabPanel>
                        <MediumAssignment currentPage={currentPage} itemPerPage={itemPerPage}></MediumAssignment>
                    </TabPanel>
                    <TabPanel>
                        <HardAssignment currentPage={currentPage} itemPerPage={itemPerPage}></HardAssignment>
                    </TabPanel>

                </Tabs>
                <div className='flex justify-center items-center gap-5 mt-14 lg:mt-0'>
                    <button onClick={handlePrevPage} className='btn bg-red-500 text-white'>Previous</button>
                    {
                        pages.map(page => <button
                            onClick={() => setCurrentPage(page)}
                            className={`btn btn-square text-white ${currentPage === page ? 'bg-green-500' : 'bg-red-500'
                                }`}
                            key={page}
                        >
                            {page}
                        </button>)
                    }
                    <button onClick={handleNextPage} className='btn bg-red-500 text-white'>Next</button>
                    <select className='bg-red-500 text-white px-2 py-2 rounded-lg' value={itemPerPage} onChange={handleItemPerPage} name="" id="">
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                    </select>
                </div>

            </section>
        </div>
    );
};

export default AllAssignments;