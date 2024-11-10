import { Link, NavLink } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const [theme,setTheme]= useState(()=>localStorage.getItem('theme') || 'light')
    const [isChecked, setIsChecked]=useState(theme === 'synthwave'? true : false)
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        // const localTheme = localStorage.getItem('theme')
        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
        
    },[theme])
    const handleTheme = (e)=>{
        if(e.target.checked){
            setTheme('synthwave')
            setIsChecked(true)
            console.log(e.target.checked);
        }
        else{
            setTheme('light')
            setIsChecked(false)
        }
    }
    const navLinks = (
        <>
            <li><NavLink to='/' className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black '} ${theme === 'synthwave'? 'text-white': 'text-black'}`}>Home</NavLink></li>
            <li><NavLink to='/allCraftList' className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black'}  ${theme === 'synthwave'? 'text-white': 'text-black'}`}>All Art & craft Items</NavLink></li>
            {
                user?
                <div className="flex flex-col md:flex-col lg:flex-row justify-center  items-start md:items-start lg:items-center">
                    <li><NavLink to='/addCraft' className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black '}  ${theme === 'synthwave'? 'text-white': 'text-black'}`}>Add Craft Item</NavLink></li>
                    <li><NavLink to={`/myCraftList/${user.email}`} className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black'}  ${theme === 'synthwave'? 'text-white': 'text-black'}`}>My Art&Craft List</NavLink></li>
                </div> :
                ''
            }
            
            <li><NavLink to='/login' className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black'}  ${theme === 'synthwave'? 'text-white': 'text-black'}`}>Login</NavLink></li>
        </>
    );
    return (
        <div className="fixed w-full z-50 h-[96px]">
            <div className="navbar bg-base-100 w-full">
                <div className="navbar-start">
                    <div className="dropdown z-30">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-max p-2 gap-2 shadow"
                        >
                        {
                            navLinks
                        }
                        </ul>
                    </div>
                    <Link to='/'><img className=" h-[80px] w-[90px]" src={"https://i.postimg.cc/jdSwsvXh/Art-Hub-logo-transparent.png"} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {
                        navLinks
                    }
                </ul>
                </div>
                
                <div className="navbar-end">
                    <div className="flex justify-center items-center gap-3">
                        <div>
                            <label className="grid cursor-pointer place-items-center">
                            <input
                                onChange={handleTheme}
                                checked={isChecked}
                                type="checkbox"
                                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                            </label>
                        </div>
                        {
                            user? 
                            <div>
                                <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100" src={user.photoURL} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content flex flex-col gap-2 menu bg-base-100 rounded-box z-[1] mt-1 w-max p-2 shadow">
                                {/* <NavLink 
                                        className={({isActive})=>`text-lg font-semibold block rounded-lg px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black '}`}
                                    >
                                        Log In
                                </NavLink> */}
                                <li className="text-lg font-semibold block rounded-lg px-4 py-2 border border-primary text-primary">{user.displayName}</li>
                                <li><button onClick={()=>
                                    logOut()
                                    .then(()=>{
                                        Swal.fire("Account Created Successfully!");
                                    })
                                    .catch((error)=>{
                                        Swal.fire({
                                            icon: "error",
                                            title: "Oops...",
                                            text: error.message.split('/')[1].split(')')[0].toUpperCase()
                                        });
                                    })
                                } className="btn btn-primary text-lg font-semibold">Log out</button></li>
                                </ul>
                                </div>
                            </div> :
                            <Link to='/login'><button className="btn btn-success">Log In</button></Link>
                        }
                    </div>
                    {/* {
                        user? 
                        <div className="flex justify-center items-center gap-4">
                            <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} >
                            <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"  src={user.photoURL} />
                            </div>
                            <button onClick={()=>logOut()} className="btn btn-active">SingOut</button>
                        </div> :
                        <Link to='/login' className="btn btn-active">Login</Link>
                    } */}
                </div>
            </div>
            <Tooltip className="z-50  bg-white" id="my-tooltip" />
        </div>
    );
};

export default Navbar;