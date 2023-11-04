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

const Slide1 = () => {
    return (
        <div>
            <div className="hero h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/QP9x1mP/istockphoto-899619542-1024x1024.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <motion.div variants={testVariants} initial="initial" animate="animate" className="md:flex text-left">
                        <motion.div variants={testVariants} className="flex-1 lg:pl-14">
                            <motion.h1 variants={testVariants} className="mb-5 text-3xl lg:text-5xl font-bold">Your Assignment Solutions, Simplified</motion.h1>
                            <motion.p variants={testVariants} className="mb-5">Welcome to our platform where academic success begins. We offer expert assignment creation and seamless submission, so you can focus on learning and leave the rest to us.</motion.p>
                        </motion.div>
                        <div className="flex-1">

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Slide1;