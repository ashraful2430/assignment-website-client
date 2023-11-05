import Banner from "../Banner/Banner";
import Faq from "../FAQ/Faq";

import Featured from "../Featured/Featured";



const Home = () => {
    return (
        <div className="px-4">
            <div className="mb-10">
                <Banner></Banner>
            </div>
            <div className="mt-20">
                <Featured></Featured>
            </div>
            <div className="mt-20 mb-10">
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;