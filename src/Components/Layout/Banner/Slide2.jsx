import { motion } from "framer-motion"

const testVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    exit: {
        x: 500,
        opacity: 0,
    }
}

const Slide2 = () => {
    return (
        <div>
            <div className="hero h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/1Z1V9Sr/istockphoto-1423559103-1024x1024.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <motion.div variants={testVariants} initial="initial" animate="animate" className="md:flex text-left">
                        <motion.div variants={testVariants} className="flex-1 lg:pl-14">
                            <motion.h1 variants={testVariants} className="mb-5 text-3xl lg:text-5xl font-bold">Elevate Your Academics with Us</motion.h1>
                            <motion.p variants={testVariants} className="mb-5">Discover a one-stop solution for assignment creation and submission. Our team of experts is dedicated to helping you excel in your academic journey.</motion.p>
                        </motion.div>
                        <div className="flex-1">

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Slide2;