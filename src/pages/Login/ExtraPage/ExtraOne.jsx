import React from 'react';

const ExtraOne = () => {
    return (
        <div>
         <h2 class="text-center text-[#030712] text-4xl font-bold mt-16 underline">Best offers for you</h2>
            <div class="flex justify-center items-center gap-5 my-12">
            {/* 1st card  */}
                <div class="card w-[500px] bg-[#FFBF0F] h-[212px] flex-1  shadow-xl">
                  <div class="card-body">
                    <h2 class="text-5xl text-black font-extrabold">15% OFF</h2>
                    <p class="text-lg text-black text-left font-medium flex-grow-0">on your next purchase</p>
                    <p class="opacity-60">use by January 2024</p>
                    <div class="flex absolute h-[212px] top-0 pl-72 justify-center items-center">
                     <img className='h-[215px]' src="/public/info-devider.png" alt="" />
                     <div>
                      <h2 class="text-4xl text-black font-bold my-3">NEW15</h2>
                      <p class="opacity-60">Coupon Code</p>
                     </div>
                    </div>
                  </div>
                </div>
                {/* 2nd card  */}
                <div class="card w-[500px] bg-[#F78C9C] h-[212px] flex-1 shadow-xl">
                  <div class="card-body">
                    <h2 class="text-5xl text-black font-extrabold ">20% OFF</h2>
                    <p class="text-lg text-black text-left font-medium flex-grow-0 ">on your next purchase</p>
                    <p class="opacity-60">use by January 2024</p>
                    <div class="flex absolute h-[212px] top-0 pl-72 justify-center items-center">
                      <img  src="/public/cupon-devider.png" alt="" />
                     <div class="justify-center items-center text-center">
                      <h2 class="text-4xl text-black font-bold my-3 ">Couple 20</h2>
                      <p class="opacity-60 ">Coupon Code</p>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
   
            <div class="text-center">
                <button class="text-[#1DD100] border py-2 px-4 rounded-md">
                    <a href="">See All Offers</a>
                </button>
            </div>
        </div>
    );
};

export default ExtraOne;