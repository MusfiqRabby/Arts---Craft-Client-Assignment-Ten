import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const Slider = () => {
    return (

    <div className="my-3" data-aos="flip-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
       <Swiper 
      navigation={true}
      pagination={
        {clickable:true}
      }
       modules={[Navigation, Autoplay, Pagination]}
      loop={true}
      autoplay={{
        delay: 2000,
      }}
      >
          <SwiperSlide>
          <div className="slide slide1 xl" >
            <div className="hero min-h-screen  " style={{ backgroundImage: 'url(https://i.ibb.co/6tr3VDj/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai.jpg)' }}>
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-poppins">Discover Inspiring Art & Craft Ideas!"</h1>
                  <p className="mb-5 font-poppins opacity-90"> could encompass a wide range of creative endeavors. From painting and sculpture to knitting and woodworking, the possibilities are endless.<br />
                  </p>
                  <button className="btn btn-primary"> <Link to="/register">Register Now</Link> </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

          <SwiperSlide>
          <div className="slide slide2 " >
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PzmSnFs/hands-sewing-red-heart-shape-wooden-background.jpg)' }}>
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-poppins">Uncover Art & Craft Inspiration!"</h1>
                  <p className="mb-5 font-poppins opacity-90"> could encompass a wide range of creative endeavors. From painting and sculpture to knitting and woodworking, the possibilities are endless.<br />
                  </p>
                  <button className="btn btn-primary"> <Link to="/register">Register Now</Link> </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

          <SwiperSlide>
          <div className="slide slide3 " >
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Tv3WC3w/7875751.jpg)' }}>
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-poppins">Find inspiration in the intricate "</h1>
                  <p className="mb-5 font-poppins opacity-90"> could encompass a wide range of creative endeavors. From painting and sculpture to knitting and woodworking, the possibilities are endless.<br />
                  </p>
                  <button className="btn btn-primary"> <Link to="/register">Register Now</Link> </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        </Swiper> 
        </div>
    );
};

export default Slider;