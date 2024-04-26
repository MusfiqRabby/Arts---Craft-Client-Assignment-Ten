import React from 'react';

const UserCard = ({user}) => {
  
  const {item, description, image, subcategory, stock} = user;
  
    return (
        <div>
  <div className="card card-compact  bg-base-100 shadow-xl">
   <figure><img className='w-full h-[220px]' src={image} /></figure>
    <div className="card-body">
 <h2 className="card-title font-poppins">{item}</h2>
  <p className='text-lg font-poppins'>{description}</p>
  <p className='font-semibold font-poppins text-sm'>Subcategory: <span className='text-[#E71367]'>{subcategory}</span></p>
  <p className='font-semibold font-poppins'>StockStatus: <span className='text-[#2E13E7]'>{stock}</span></p>
<div className="card-actions justify-end">
 <button className="btn text-white bg-[#1384E7]">View Details</button>
   </div>
    </div>
     </div>
     </div>
    );
};

export default UserCard;