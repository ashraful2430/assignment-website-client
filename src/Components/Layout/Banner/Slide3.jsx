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

const Slide3 = () => {
    return (
        <div>
            <div className="hero h-[80vh] " style={{ backgroundImage: 'url(https://i.ibb.co/SQH3fcY/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <motion.div variants={testVariants} initial="initial" animate="animate" className="md:flex text-left">
                        <motion.div variants={testVariants} className="flex-1 lg:pl-14">
                            <motion.h1 variants={testVariants} className="mb-5 text-3xl lg:text-5xl font-bold">Streamlined Assignment Assistance</motion.h1>
                            <motion.p variants={testVariants} className="mb-5">Experience the convenience of assignment creation and submission. We are here to make your academic life easier and more productive.</motion.p>
                        </motion.div>
                        <div className="flex-1">

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Slide3;