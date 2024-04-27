import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../FirbaseProvider/FirbaseProvider';

const ArtCraftList = () => {
   
    const {user} = useContext(AuthContext);

    const [item, setItem] = useState([]);

   useEffect(() =>{
    fetch(`http://localhost:5000/artcraft/${user?.email}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setItem(data);
    })
   },[user])

    return (
        <div>
     
      {
        item?.map(p => {
           return <div>
    <div className="card card-side bg-base-100 shadow-xl m-20 ">
  <figure>
    <img className='w-96 h-[300px] p-2 ' src={p.image} alt="Movie"/>
    </figure>
  <div className="card-body">
    <h2 className="card-title font-poppins text-4xl text-[#154ae8]"> {p.item}</h2>
    <div className='flex gap-2 text-2xl'>
    <p className=' font-bold font-poppins text-[#dc6539] '>Prices: <span >{p.price}</span></p>
    <p className='font-poppins mr-60 font-bold text-[#15c7e8]'>Rating: <span>{p.rating}</span></p>
    </div>
    <div className='flex gap-1 text-lg text-[#1594e8]'>
        <p className='font-poppins font-bold'> Customization : <span>{p.customization}</span></p>
        <p className='font-poppins mr-36 font-bold '> StockStatus : <span>{p.stock}</span></p>
    </div>
    <div className="card-actions my-3 gap-8 ">
    <button className="btn md:btn-md bg-[#76e815] lg:btn-lg">Delete</button>
    <button className="btn bg-[#E81560] text-white md:btn-md lg:btn-lg">Update</button>
    </div>
  </div>
</div>
            </div>
        })
      }

        </div>
    );
};

export default ArtCraftList;