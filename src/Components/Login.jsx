import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {  useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {login} = useContext(AuthContext)
    const[showPassword,setShowPassword]=useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    // const {logIn}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    
    const onSubmit = (data) =>{ 
        const email = data.email
        const password = data.password
        // console.log(email,password);

        // login using email 
        login(email,password)
        .then((result)=>{
            console.log(result);
            Swal.fire("Successfully Logged In!");
            reset()
            navigate(location?.state ? location.state : '/')
            console.log(location.state);
        })
        .catch((error)=>{
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message.split('/')[1].split(')')[0].toUpperCase()
            });
        })
    }
    return (
        <div>
            <div className="hero  min-h-[calc(100vh-316px)]">
                <div className="hero-content   flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 p-10 w-full max-w-sm md:max-w-lg lg:min-w-[700px]  shrink-0 shadow-2xl">
                    <div>
                        <h1 className="text-4xl font-semibold text-center">Login your account</h1>
                        <div className="border-b my-4 md:my-6 lg:my-12"></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-sm md:max-w-lg lg:min-w-full p-0">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="input input-bordered font-base font-normal"
                        {...register("email", { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input
                        name="password"
                        type={showPassword?'text':'password'}
                        placeholder="Enter your password"
                        className="input input-bordered text-base font-normal"
                        {...register("password", { required: true })}
                        />
                        <span onClick={()=>{setShowPassword(!showPassword)}} className="absolute right-0 top-[40%] m-3">
                            {showPassword?<FaEye/>:<FaEyeSlash />}
                        </span>
                        {errors.password && <span>This field is required</span>}
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary text-white">Login</button>
                    </div>
                    <p className="text-center pt-8 text-base font-semibold leading-6 text-[#706F6F]">Do not Have An Account ? <Link to='/register' className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold">Register</Link></p>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;