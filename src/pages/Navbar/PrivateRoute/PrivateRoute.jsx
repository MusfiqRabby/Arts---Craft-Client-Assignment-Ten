import { useContext } from "react";
import { AuthContext } from "../../../FirbaseProvider/FirbaseProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
   
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
  
    if(loading) {
        return <div className='text-center items-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
       }
   
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;