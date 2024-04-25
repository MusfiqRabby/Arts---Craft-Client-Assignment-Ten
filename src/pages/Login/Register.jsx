import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../FirbaseProvider/FirbaseProvider';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const redirect = useNavigate()

    const {createUser, updateUserProfile} = useContext(AuthContext);

    const {register, handleSubmit,
        formState: { errors },
      } = useForm();
   
      const onSubmit = data => {
       const {email, password, fullName, photoURL} = data
       setRegisterError('')
          setSuccess('');
     
        if(password.length < 6){
        toast.warning('password must be at least 6 character')
        return;
      }
      else if(!/[A-Z]/.test(password)){
        toast('Must have an Uppercase letter in the password')
        return;
      }
      else if(!/[a-z]/.test(password)){
        toast('Must have a Lowercase letter in the password')
        return;
      }


        createUser(email, password)
        .then(() => {
            updateUserProfile(fullName, photoURL)
            .then(() => {
                setUser({...user, displayName : fullName, photoURL})
              })
            Swal.fire({
                title: 'Success',
                text: 'User Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
           redirect("/")
        })
        .catch(error => {
            toast.warning("this email already used")
            setRegisterError(error.message)
        })
        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
  <div className="text-center">
     <h1 className="text-5xl font-bold">Please Register</h1>
   </div>
   <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   <div className="card-body">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control">
       <label className="label">
       <span className="label-text">Name</span>
        </label>
      <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("fullName", { required: true })} />
         {errors.fullName && <span className="text-red-600">This field is required</span>}
        </div>
       <div className="form-control">
        <label className="label">
       <span className="label-text">Photo URL</span>
      </label>
       <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered"  />
        </div>
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
      <div className="mb-4 relative ">
      <input 
       type={showPassword? 'text' : 'password'} name="password" 
       placeholder="password" className="input w-full input-bordered" {...register("password", { required: true })} />
         {errors.password && <span className="text-red-600">This field is required</span>}
        <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
          {
            showPassword ? <FaEyeSlash></FaEyeSlash>:
            <FaEye></FaEye>
          }
        </span>
      </div>
       {/* {errors.password && <span className="text-red-600">This field is required</span>} */}
       <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
       <div className="form-control mt-6">
       <button className="btn btn-primary">Register</button>
     </div>
       </form>

        {
          registerError && <p className="text-red-700">{registerError}</p>
        }
        {
          success && <p className="text-green-700 font-bold">{success}</p>
       }

       <p>Already have an account?<Link className="text-blue-600 font-bold" to='/login'> Login </Link></p> 
    </div>
   </div>
   </div>
   <ToastContainer />
  </div> 
    );
};

export default Register;