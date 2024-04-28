import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../FirbaseProvider/FirbaseProvider';
import ItemartandCraft from './ItemartandCraft';
import { Helmet } from 'react-helmet-async';



const ArtCraftList = () => {
   
    const {user} = useContext(AuthContext);
    const [item, setItem] = useState([]);

    const [card, setCard] = useState();

   useEffect(() =>{
    fetch(`http://localhost:5000/artcraft/${user?.email}`)
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

      {
        item.map(product => <ItemartandCraft
        key={product._id}
        product={product}
        card={item}
        setCard={setItem}
        ></ItemartandCraft> )
        }

        </div>
    );
};

export default ArtCraftList;