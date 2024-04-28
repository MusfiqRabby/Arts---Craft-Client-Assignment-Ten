
import { Helmet } from "react-helmet-async";
import MoreSection from "../Login/ExtraPage/MoreSection";
import Review from "../Login/ExtraPage/Review";
import CraftItems from "./CraftItems";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Art & Craft | Home</title>
          </Helmet>
          <Slider></Slider>
          <CraftItems></CraftItems>
          <Review></Review>
          <MoreSection></MoreSection>
        </div>
    );
};

export default Home;