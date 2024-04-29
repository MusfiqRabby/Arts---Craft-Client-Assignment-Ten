
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import UserCard from "../Home/userCard/UserCard";

const ArtCraftItem = () => {
   
    const users = useLoaderData()
   
    return (
        <div>   
            <Helmet>
                <title>Art & Craft | All Art & craft</title>
            </Helmet>
          
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>   
                   {
                    users.map(user => <UserCard 
                        key={user._id}
                        user={user}
                    >
    
                    </UserCard>)
                }
         </div>

        </div>
    );
};

export default ArtCraftItem;