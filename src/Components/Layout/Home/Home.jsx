import Banner from "../Banner/Banner";
import Faq from "../FAQ/Faq";

import Featured from "../Featured/Featured";
import Recent from "../Recent/Recent";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="px-4 font-sans">
      <div className="mb-10">
        <Banner></Banner>
      </div>
      <div>
        <Recent />
      </div>
      <div className="mt-20">
        <Featured></Featured>
      </div>
      <div className="mt-10">
        <Testimonials />
      </div>
      <div className="mt-20">
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
