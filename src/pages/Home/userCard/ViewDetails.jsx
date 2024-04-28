import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
  
  const users = useLoaderData()
  const {_id, item, subcategory,description,image, price,rating, processing, customization, stock, name, email } = users;

  useEffect(() => {
    fetch(`http://localhost:5000/users/${_id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  },[])
  
    return (
        <div>
            <div data-aos="flip-left" data-aos-duration="1500">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:mb-5">
        <div className='w-full h-auto '>
          <img className='w-full h-[600px]' src={image} alt="" />
        </div>
        <div className='font-poppins'>
          <h1 className="text-5xl font-bold lg:mb-2 text-indigo-500 font-poppins">
           {subcategory}
          </h1>
          <hr />
          <p className="my-2"> User Name: <span className='font-bold text-lg text-[#FFC300]'>{name} </span> </p>
          <p className="my-2"> User Email: <span className='font-bold text-lg'>{email} </span> </p>
          <hr />
          <h4 className="mt-4">
            <span className="font-bold font-poppins ">Description:</span> {description}
          </h4>
          <div>
          <div>
             <p className="font-medium lg:mb-3 font-poppins">Price: <span className='text-[#E71367] font-bold'>{price}</span></p>
          </div>
          </div>
          <hr />
          <div className="flex gap-8 mt-2">
            <div>
              <p className="opacity-80 mb-1">Item:</p>
              <p className="opacity-80 mb-1">processing-time:</p>
              <p className="opacity-80 mb-1">Customization:</p>
              <p className="opacity-80 mb-1"> Rating:</p>
              <p className="opacity-80 mb-1">Stock-Status:</p>
            </div>
            <div className='font-poppins text-[#44bcd8]'>
              <p className="font-bold mb-1">{item}</p>
              <p className="font-bold mb-1">{processing}</p>
              <p className="font-bold mb-1">{customization}</p>
              <p className="font-bold mb-1">{rating}</p>
              <p className="font-bold mb-1">{stock}</p>
            </div>
          </div>
       
        </div>
      </div>


        </div>



         </div>
    );
};

export default ViewDetails;