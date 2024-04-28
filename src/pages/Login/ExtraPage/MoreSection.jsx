
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";

const MoreSection = () => {
    return (
        <div data-aos="flip-left">
            <div className='font-poppins text-center font-bold text-red-300 text-4xl mt-14'>
                <h2>Contact Us</h2>
            </div>
            
            <div className='lg:flex mb-4'>
                <div className='rounded-lg h-40 w-full lg:w-[374px] my-6 mx-auto bg-[#FFC300] p-10 '>
                 <div className="text-3xl text-white font-poppins">
                <p><FaPhone/></p>
                <p>+651428146458</p>
                </div>
                </div>
                <div className='rounded-lg h-40 w-full lg:w-[374px] my-6 mx-auto bg-[#00BBFF] p-10'>
                <div className="text-3xl text-white font-poppins">
                <p className="text-4xl"><MdOutlineEmail /></p>
                <p>artcraft@gmail.com</p>
                </div>
                </div>
                <div className='rounded-lg h-40 w-full lg:w-[374px] my-6 mx-auto bg-[#00FFA0] p-10 '>
                <div className="text-3xl text-white font-poppins items-center justify-center">
                <p className="text-4xl"><MdLocationPin /></p>
                <p>Dhaka Bangladesh</p>
                </div>
                </div>
            </div>


        </div>
    );
};

export default MoreSection;