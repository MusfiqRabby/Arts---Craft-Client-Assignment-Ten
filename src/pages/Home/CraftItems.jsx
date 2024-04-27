import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from './userCard/UserCard';

const CraftItems = () => {
  
    const users = useLoaderData()
  
    return (
        <div>
           <div className='mt-10 bg-amber-600 rounded-br-xl rounded-tl-xl p-3'>
           <h2 className='text-center font-bold font-poppins text-3xl text-white'>Art & Craft Items </h2>
           </div>
         
     <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
          
        {
            users.slice(0, 6).map(user => <UserCard
            key={user._id}
            user={user}
            >

            </UserCard>)
        }


           </div>
        </div>
    );
};

export default CraftItems;