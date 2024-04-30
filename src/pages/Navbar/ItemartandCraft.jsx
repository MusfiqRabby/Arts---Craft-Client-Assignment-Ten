
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemartandCraft = ({ product, card, setCard }) => {

  const { _id, item, rating, image, customization, stock, price } = product;

  const handleDelete = _id => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` https://b9a10-server-side-musfiq-rabby.vercel.app/users/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your art and craft list has been deleted.",
                icon: "success"
              });
              const remaining = card.filter(cart => cart._id !== _id)
              setCard(remaining);
            }
          })

      }
    });
  }

  return (
    <div data-aos="flip-left">
      <div className="card card-side bg-gray-100 shadow-xl m-10">
        <img className='w-96 h-[250px]' src={image} />
        <div className="card-body">
          <h2 className="card-title font-poppins text-4xl text-[#154ae8]">{item}</h2>
          <div className='flex gap-2 text-2xl'>
            <p className=' font-bold font-poppins text-[#dc6539] '>Prices: <span >{price}</span></p>
            <p className='font-poppins mr-64 font-bold text-[#15c7e8]'>Rating: <span>{rating}</span></p>
          </div>
          <div className='flex font-poppins font-bold'>
            <p >Customization : <span>{customization}</span></p>
            <p className='mr-64'>StockStatus : <span>{stock}</span></p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(_id)}
              className="btn md:btn-md bg-[#76e815] lg:btn-lg">Delete</button>
            <Link to={`/updatepage/${_id}`}>
              <button className="btn bg-[#E81560] text-white md:btn-md lg:btn-lg">Update</button>
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ItemartandCraft;