import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../FirbaseProvider/FirbaseProvider';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  
    const {loginUser} = useContext(AuthContext)

    const redirect = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit  = (data) => {
        const {email, password} = data;
        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            toast.success("login successfully")
            setTimeout(() => redirect("/"), 2000)
        })
        .catch(error => {
            console.log(error)
            toast.warning('wrong password or email, please try again')
        })
       
      }
  
    return (
        <div className="hero min-h-screen bg-base-200" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
     <div className="hero-content flex-col ">
       <div className="text-center">
         <h1 className="text-5xl font-bold">Login Now!</h1>
       </div>
       <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <div className="card-body">
           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
             {errors.email && <span className="text-red-600">This field is required</span>}
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
             {errors.password && <span className="text-red-600">This field is required</span>}
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary">Login</button>
           </div>
           </form>
            <SocialLogin></SocialLogin>
            <p>Don't have an account <Link className="text-blue-600 font-bold" to='/register'> Register </Link> </p> 
            
         </div>
       </div>
     </div>
   <ToastContainer/> 
   </div> 
    );
};

export default Login;