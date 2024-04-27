
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemartandCraft = ({product, card, setCard}) => {

    const {_id, item, rating, image, customization, stock, price} = product;

    const handleDelete = _id =>{
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
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
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
        <div>
              <div data-aos="flip-left">
             <div className="card card-side bg-base-200 shadow-xl  m-10 p-10 ">
  <figure>
    <img className='w-96 h-[350px] ' src={image} alt="Movie"/>
    </figure>
  <div className="card-body">
    <h2 className="card-title font-poppins text-4xl text-[#154ae8]"> {item}</h2>
    <div className='flex gap-2 text-2xl'>
    <p className=' font-bold font-poppins text-[#dc6539] '>Prices: <span >{price}</span></p>
    <p className='font-poppins mr-50 font-bold text-[#15c7e8]'>Rating: <span>{rating}</span></p>
    </div>
    <div className='flex gap-1 text-lg text-[#1594e8]'>
        <p className='font-poppins font-bold'> Customization : <span>{customization}</span></p>
        <p className='font-poppins mr-36 font-bold '> StockStatus : <span>{stock}</span></p>
    </div>
    <div className="card-actions my-3 gap-8 ">
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
        </div>
    );
};

export default ItemartandCraft;