import React, { useContext } from 'react';
import { AuthContext } from '../../FirbaseProvider/FirbaseProvider';
import { FaGoogle, FaGithub  } from "react-icons/fa";

const SocialLogin = () => {
   
   const {googleLogin, githubLogin} = useContext(AuthContext)
   


    return (
       <>
        <div className='divider'>Continue With</div>
        <div className='flex justify-around'>
            <button onClick={() => googleLogin()} 
            className='btn btn-primary btn-outline'><FaGoogle/></button>
            <button onClick={() => githubLogin()} 
            className='btn btn-secondary btn-outline'><FaGithub/></button>
        </div>
       </>
    );
};

export default SocialLogin;