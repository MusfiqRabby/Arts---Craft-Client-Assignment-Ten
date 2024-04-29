import { useLoaderData } from "react-router-dom";
 import ArtsItem from "./ArtsItem";


const CraftItems = () => {
  
    const collection = useLoaderData();
    

    return (
        <div>
           <div className="mt-20 font-poppins text-center bg-accent text-4xl p-3 rounded-xl font-bold text-white">
            <h1>Craft Items Section</h1>
           </div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
           {
                collection.slice(0, 6).map(lok => <ArtsItem
                key={lok._id}
                lok={lok}
                >
                </ArtsItem>
                )
            }
           </div>
          
        </div>
    );
};

export default CraftItems;