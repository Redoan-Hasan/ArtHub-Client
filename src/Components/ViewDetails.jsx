
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const ViewDetails = () => {
    const {user}=useContext(AuthContext)
    const details = useLoaderData()
    // console.log(details);
    const {itemName, subcategory_name, price, processing_time, rating, description, photo , customization ,stockStatus}=details;
    return (
        <div className="max-w-screen-xl mx-auto px-3">
            <div className="card lg:card-side bg-base-100 shadow-xl border border-primary">
            <figure>
                <img
                src={photo}
                alt="Album" 
                className="w-[400px] h-[400px]"
                />
            </figure>
            <div className="card-body justify-center p-2 md:p-4 lg:p-8 items-start lg:w-2/6">
            <div>
                <div className="flex justify-center items-center space-x-4 ">
                    <img alt="" src={user.photoURL} className="object-cover w-14 h-14 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-xl font-semibold">{user.displayName}</a>
                        <span className="text-lg font-semibold ">Email : {user.email}</span>
                    </div>
                </div>
            </div>
                <h2 className="card-title text-2xl font-bold">{itemName}</h2>
                <p className="text-lg font-semibold">#{subcategory_name}</p>
                <p className="text-lg font-semibold">Price : ${price}</p>
                <p className="text-xl font-semibold">Processing Time : {processing_time}</p>
                <p className="text-xl font-semibold">Rating : {rating}</p>
                <p className="text-xl font-semibold">Customization : {customization}</p>
                <p className="text-xl font-semibold">Stock Status : {stockStatus}</p>
                <p className="text-xl font-semibold">Interpretation : <span className="text-base">{description}</span></p>
            </div>
            </div>
        </div>
    );
};

export default ViewDetails;