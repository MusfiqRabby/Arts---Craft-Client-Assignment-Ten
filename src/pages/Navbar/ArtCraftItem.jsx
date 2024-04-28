import { useLoaderData } from "react-router-dom";
import AllArtCraft from "../Login/AllArtCraft";
import { Helmet } from "react-helmet-async";

const ArtCraftItem = () => {
   
   const artcraft = useLoaderData()
   
    return (
        <div>   
            <Helmet>
                <title>Art & Craft | All Art & craft</title>
            </Helmet>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 m-5 ">
                {
                    artcraft.map(res => <AllArtCraft 
                    key={res._id}
                    res={res}>
                    </AllArtCraft>)
                }
            </div>


        </div>
    );
};

export default ArtCraftItem;