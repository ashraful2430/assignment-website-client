import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;