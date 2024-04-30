import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../FirbaseProvider/FirbaseProvider';
import ItemartandCraft from './ItemartandCraft';
import { Helmet } from 'react-helmet-async';



const ArtCraftList = () => {
   
    const {user} = useContext(AuthContext);
    const [item, setItem] = useState([]);

    const [card, setCard] = useState();

   useEffect(() =>{
    fetch(` https://b9a10-server-side-musfiq-rabby.vercel.app/artcraft/${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setItem(data);
    })
   },[user.email])

    return (
        <div>
            <Helmet>
                <title>Art & Craft | My Art & Craft List</title>
            </Helmet>

        <div className='mb-10'>
        <details className="dropdown">
        <summary className="mx-10 btn px-20">Menu</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
      <li><a>Landscape Painting</a></li>
      <li><a>Portrait Drawing</a></li>
      <li><a>Watercolour Painting</a></li>
      <li><a>Oil Painting</a></li>
      <li><a>Charcoal Sketching</a></li>
      <li><a>Cartoon Drawing</a></li>
         </ul>
        </details>
        </div>
      <div>
      {
        item.map(product => <ItemartandCraft
        key={product._id}
        product={product}
        card={item}
        setCard={setItem}
        ></ItemartandCraft> )
        }
      </div>

        </div>
    );
};

export default ArtCraftList;