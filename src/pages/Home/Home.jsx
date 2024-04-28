import ExtraOne from "../Login/ExtraPage/ExtraOne";
import Review from "../Login/ExtraPage/Review";
import CraftItems from "./CraftItems";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <ExtraOne></ExtraOne>
          <CraftItems></CraftItems>
          <Review></Review>
        </div>
    );
};

export default Home;