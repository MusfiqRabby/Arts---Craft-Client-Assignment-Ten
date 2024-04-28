import React from 'react';

const Review = () => {
    return (
    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='my-10'>
           <div className='font-poppins text-4xl mt-16 text-center font-extrabold underline'>
               <h2>Customer Review</h2>
           </div>
          <div className='lg:flex gap-6 mt-4'>
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:bg-gray-100 ">
       <div className="flex justify-between ">
           <div className="flex space-x-4">
               <div>
                   <img src="https://i.ibb.co/xM6Rc8C/handsome-smiling-man-looking-with-disbelief.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
               </div>
               <div>
                   <h4 className="font-bold">Leo Abraham</h4>
                   <span className="text-xs dark:text-gray-600">5 days ago</span>
               </div>
           </div>
           <div className="flex items-center space-x-2 dark:text-yellow-700">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                   <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
               </svg>
               <span className="text-xl font-bold">6.7</span>
           </div>
       </div>
       <div className="p-4 space-y-2 text-sm dark:text-gray-600">
           <p>This product exceeded my expectations! It's incredibly durable and stylish. Definitely worth the investment, I'm so impressed with the customer service I received. They were attentive, knowledgeable, and resolved my issue promptly.</p>
           <p>I love how user-friendly this app is. It's made my daily tasks so much easier to manage. Highly recommend.</p>
       </div>
   </div>
   
   <div className="container flex flex-col w-full flex-1 max-w-lg  mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-100 ">
       <div className="flex justify-between p-4">
           <div className="flex space-x-4">
               <div>
                   <img src="https://i.ibb.co/VtyyFTD/cheerful-man-looking-camera.jpg" alt="" className="object-cover w-14 h-12 rounded-full dark:bg-gray-500" />
               </div>
               <div>
                   <h4 className="font-bold">Leroy Jenkins</h4>
                   <span className="text-xs dark:text-gray-600">2 days ago</span>
               </div>
           </div>
   <div className="rating">
     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
     <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <span className="text-xl font-bold">4.5</span>
   </div>
       </div>
       <div className="p-4 space-y-2 text-sm dark:text-gray-600">
           <p>I really wish the film Art and Craft had been made a few years ago before I retired from teaching. This is because in my psychology classes, I occasionally showed my students films about strange people and we'd discuss the possible diagnoses that you could give to the folks portrayed in the film. </p>
           <p>Well, in the case of Art and Craft, this really would have opened up some wonderful discussions, as the man featured in this documentary, Mark Landis is one odd character...and that's putting is mildly!.</p>
       </div>
   </div>
    </div>
    </div>
    );
};

export default Review;