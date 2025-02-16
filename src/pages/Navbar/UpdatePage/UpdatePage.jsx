import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePage = () => {
    
 const user = useLoaderData()
   const {_id, item, subcategory,description,image, price,rating, processing, customization, stock, } = user;

   const hanldeUpdateItem = event => {
    event.preventDefault();
    console.log(user)
    const form = event.target;
    const item = form.item.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processing = form.processing.value;
    const customization = form.customization.value;
    const stock = form.stock.value;


    const updatedUser = {item, subcategory,description,image, price,rating, processing, customization, stock, }

    console.log(updatedUser)


    // send data to the server
    fetch(` https://b9a10-server-side-musfiq-rabby.vercel.app/users/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success',
                text: 'User Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
    
   }
    



    return (
        <div>
 
 <div className='my-10  p-24"'>
 <div className="text-center mt-8">
 <h2 className="text-3xl p-4 font-poppins font-bold bg-[#F45606] text-white">Update Item</h2>
 </div>
 <form onSubmit={hanldeUpdateItem}>
   {/* form titel name and subcategory row  */}
<div className="md:flex mb-4">
  <div className="form-control md:w-1/2">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Item_Name</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="item Name" required name="item" defaultValue={item} className="input input-bordered w-full"/>
    </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Subcategory_Name</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="Subcategory_Name" required name="subcategory" defaultValue={subcategory}  className="input input-bordered w-full" />
    </label>
  </div>
  </div>

   {/* form short description and subcategory row  */}
<div className="md:flex mb-4">
  <div className="form-control md:w-1/2">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Short description</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="short description" required name="description" defaultValue={description} className="input input-bordered w-full"/>
    </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">User image URL</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="use image URL" required name="image" defaultValue={image}  className="input input-bordered w-full" />
    </label>
  </div>
  </div>
   {/* form price and rating row  */}
<div className="md:flex mb-4">
  <div className="form-control md:w-1/2">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Price</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="Price" name="price" required defaultValue={price}  className="input input-bordered w-full"/>
    </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Rating</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="Rating" name="rating" required defaultValue={rating}  className="input input-bordered w-full" />
    </label>
  </div>
  </div>
   {/* form customization and processing_time row  */}
<div className="md:flex mb-4">
  <div className="form-control md:w-1/2">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">processing_time</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="processing_time" required name="processing" defaultValue={processing}  className="input input-bordered w-full"/>
    </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
 <label className="label">
 <span className="label-text text-xl font-poppins required font-bold">Customization</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="customization" required name="customization" defaultValue={customization}  className="input input-bordered w-full" />
    </label>
  </div>
  </div>
   {/* form stockStatus row  */}
<div className="md:flex mb-4">
  <div className="form-control md:w-1/2">
 <label className="label">
 <span className="label-text text-xl font-poppins required font-bold">StockStatus</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="StockStatus" name="stock" defaultValue={stock}  className="input input-bordered w-full"/>
    </label>
  </div>
  </div>
  <input type="submit" value="Update" className="btn text-xl btn-block bg-[#C70039] text-white" />
  </form>
   </div>
        </div>
    );
};

export default UpdatePage;