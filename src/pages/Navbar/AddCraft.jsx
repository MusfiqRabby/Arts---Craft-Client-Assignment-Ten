import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../FirbaseProvider/FirbaseProvider";
import { Helmet } from "react-helmet-async";

const AddCraft = () => {
   
  const {user} = useContext(AuthContext)
  
   const handleAddCraft = event => {
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
    const email = user.email;
    const name = form.name.value;
    const stock = form.stock.value;


    const newUser = {item, subcategory,description,image, price,rating, processing, customization, email, name, stock, }

    // console.log(newUser)


    // send data to the server
    fetch(' https://b9a10-server-side-musfiq-rabby.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'User Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
    
   }
   
    return (
       <div data-aos="flip-right"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000">
        <Helmet>
          <title>Art & craft | Add Craft</title>
        </Helmet>
         <div className="text-center mt-8">
         <h2 className="text-3xl p-4 font-extrabold rounded-t-lg bg-[#33FFBD]">Add Craft Item</h2>
         </div>
       <div className='my-10 bg-[#F4F3F0] p-24"'>
 <form onSubmit={handleAddCraft}>
   {/* form titel name and subcategory row  */}
<div className="md:flex mb-4">
  <div className="form-control md:w-1/2">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Item_Name</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="item Name" required name="item" className="input input-bordered w-full"/>
    </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Subcategory_Name</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="Subcategory_Name" required name="subcategory" className="input input-bordered w-full" />
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
  <input type="text" placeholder="short description" required name="description" className="input input-bordered w-full"/>
    </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Use image URL</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="use image URL" required name="image" className="input input-bordered w-full" />
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
  <input type="text" placeholder="Price" name="price" required className="input input-bordered w-full"/>
    </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Rating</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="Rating" required name="rating" className="input input-bordered w-full" />
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
  <input type="text" placeholder="processing_time" required name="processing" className="input input-bordered w-full"/>
    </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">Customization</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="customization" required name="customization" className="input input-bordered w-full" />
    </label>
  </div>
  </div>

   {/* form User Email and User Name row  */}
<div className="md:flex mb-4">
  <div className="form-control md:w-1/2">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">User Email</span>
   </label>
   <label className="input-group">
  <input type="text" required placeholder="User Email" name="email" className="input input-bordered w-full"/>
    </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">User Name</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="User Name" required name="name" className="input input-bordered w-full" />
    </label>
  </div>
  </div>
   {/* form stockStatus row  */}
<div className="md:flex mb-4">
  <div className="form-control md:w-1/2">
 <label className="label">
 <span className="label-text text-xl font-poppins font-bold">StockStatus</span>
   </label>
   <label className="input-group">
  <input type="text" placeholder="StockStatus" name="stock" required className="input input-bordered w-full"/>
    </label>
  </div>
  </div>
  <input type="submit" value="Add Craft" className="btn btn-block bg-[#331A15] text-white" />
  </form>
   </div>
   </div>
    );
};

export default AddCraft;