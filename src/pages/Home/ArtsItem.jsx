import React from 'react';
import { Link } from 'react-router-dom';

const ArtsItem = ({lok}) => {

 const {_id, item, processing, image, subcategory, stock,} = lok;

    return (
        <div>
    <div data-aos="zoom-in">
  <div className="card card-compact lg:w-96 bg-gray-200 shadow-xl">
   <figure><img className='w-full h-[230px]' src={image} /></figure>
    <div className="card-body">
 <h2 className="card-title font-poppins">{item}</h2>
  <p className='text-lg font-bold font-poppins'> processing-time: {processing}</p>
  <p className='font-semibold font-poppins text-sm'>Subcategory: <span className='text-[#E71367]'>{subcategory}</span></p>
  <p className='font-semibold font-poppins'>StockStatus: <span className='text-[#2E13E7]'>{stock}</span></p>
<div className="card-actions justify-end">
    <Link to={`/viewdetails/${_id}`}>
    <button className="btn text-white bg-[#1384E7]">View Details</button>
    </Link>
   </div>
    </div>
     </div>
     </div>
        </div>
    );
};

export default ArtsItem;