import {  useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {
    const {createUser,updatePhoto} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const name = data.fullName;
        const photo = data.photo;
        const email = data.email;
        const password = data.password;
        console.log(name, photo, email, password);
    
        createUser(email,password)
        .then((result)=>{
            console.log(result.user);
            Swal.fire("Account Created Successfully!");
            reset()
            // update photo 
            updatePhoto(name,photo)
            .then((result)=>{
                console.log(result, "successfully updated the photo");
            })
            .catch(err=>console.log(err.message,"image dont get updated"))
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message.split('/')[1].split(')')[0].toUpperCase()
            });
        })
    };

    return (
        <div>
        <div className="hero  min-h-[calc(100vh-398px)]">
            <div className="hero-content   flex-col lg:flex-row-reverse">
            <div className="card  bg-base-100 p-10 w-full max-w-sm md:max-w-lg lg:min-w-[700px]  shrink-0 shadow-2xl">
                <div>
                <h1 className="text-4xl font-semibold text-center">
                    Register your account
                </h1>
                <div className="border-b my-4 md:my-6 lg:my-12"></div>
                </div>
                <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body max-w-sm md:max-w-lg lg:min-w-full p-0"
                >
                <div className="form-control">
                    <label className="label">
                    <span className="label-text text-xl font-semibold">
                        Your Name
                    </span>
                    </label>
                    <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered font-base font-normal"
                    {...register("fullName", { required: true })}
                    />
                    {errors.fullName && <span>This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text text-xl font-semibold">
                        Photo URL
                    </span>
                    </label>
                    <input
                    name="photo"
                    type="url"
                    placeholder="Enter your photo url"
                    className="input input-bordered font-base font-normal"
                    {...register("photo", { required: true })}
                    />
                    {errors.photo && <span>This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text text-xl font-semibold">
                        Email
                    </span>
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
                    <span className="label-text text-xl font-semibold">
                        Password
                    </span>
                    </label>
                    <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input input-bordered text-base font-normal"
                    {...register("password", { required: true })}
                    />
                    <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-[32%] m-3"
                    >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    {errors.password && <span>This field is required</span>}
                    <div className="flex items-center gap-2 py-5 text-base font-normal text-[#706F6F]">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        Accept{" "}
                        <a className="font-semibold" href="">
                        Term & Conditions
                        </a>
                    </label>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white">
                    Register
                    </button>
                </div>
                </form>
                <div className="flex justify-center items-center">
                    <Link to='/' className="btn my-2 btn-secondary">Back to Home?</Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Register;