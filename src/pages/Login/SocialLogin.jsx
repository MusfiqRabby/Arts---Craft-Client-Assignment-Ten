import React, { useContext } from 'react';
import { AuthContext } from '../../FirbaseProvider/FirbaseProvider';
import { FaGoogle, FaGithub  } from "react-icons/fa";
import {useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
   
   const {googleLogin, githubLogin} = useContext(AuthContext)
   const navigate = useNavigate()
   const location = useLocation()
   const from = location?.state || '/'

    const handleSocialLogin = socialProvider  => {
        socialProvider()
        .then(result =>{
            if(result.use){
                navigate(from)
            }
        })
    }

    return (
       <>
        <div className='divider'>Continue With</div>
        <div className='flex justify-around'>
            <button onClick={() => handleSocialLogin(googleLogin)} 
            className='btn btn-primary btn-outline'><FaGoogle/></button>
            <button onClick={() => handleSocialLogin(githubLogin)} 
            className='btn btn-secondary btn-outline'><FaGithub/></button>
        </div>
       </>
    );
};

export default SocialLogin;