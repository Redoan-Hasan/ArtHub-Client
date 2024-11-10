import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const UpdateExistingCraft = () => {
    const {user}=useContext(AuthContext)
    const oldCraft = useLoaderData();
    console.log(oldCraft);
    
    const handleUpdateCraft = (e) => {
        e.preventDefault();
        const itemName = e.target.itemName.value;
        const subcategory_name = e.target.subcategory_name.value;
        const price = e.target.price.value;
        const processing_time = e.target.processing_time.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const photo = e.target.photo.value;
        const email = user.email;
        const customization = e.target.customization.value;
        const stockStatus = e.target.stockStatus.value;
        const newUpdateCraft = { itemName, subcategory_name, price, processing_time, rating, description, photo , customization ,stockStatus, email};
        console.log(newUpdateCraft);
        fetch(`http://localhost:5000/updateExistingCraft/${oldCraft._id}` , {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body : JSON.stringify(newUpdateCraft)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire("Your Craft Updated Successfully")
                e.target.reset()
            }
        })
    }
    return (
        <div>
        <div className="max-w-screen-xl mx-auto pt-10 text-center lg:text-left">
            <Link
            to="/"
            className="btn btn-primary"
            >
            <span className="text-xl font-normal">
                <FaArrowLeft />
            </span>
            <span className="text-2xl font-normal">Back to home</span>
            </Link>
        </div>
        <div className="px-2">
        
            <div className="max-w-screen-xl mx-auto p-10 md:p-16 lg:p-16 my-12 rounded-lg border border-primary">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold pb-1 md:pb-2 lg:pb-4">
                Add New Craft
                </h1>
                <p className=" text-base md:text-lg lg:text-lg font-medium leading-8">
                Wanna add your own craft?
                </p>
            </div>
            <div>
                <div>
                <form onSubmit={handleUpdateCraft}>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-9">
                    <div className="w-full md:w-2/4lg:w-2/4">
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">
                            Item Name
                            </span>
                        </label>
                        <input
                            defaultValue={oldCraft.itemName}
                            name="itemName"
                            type="text"
                            placeholder="Enter Item Name"
                            className=" input input-bordered"
                            required
                        />
                        </div>
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">
                            Subcategory Name
                            </span>
                        </label>
                        <input
                            defaultValue={oldCraft.subcategory_name}
                            name="subcategory_name"
                            type="text"
                            placeholder="Enter craft subcategory name"
                            className=" input input-bordered"
                            required
                        />
                        </div>
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">
                            Price
                            </span>
                        </label>
                        <input
                            defaultValue={oldCraft.price}
                            name="price"
                            type="number"
                            placeholder="Enter Craft price"
                            className=" input input-bordered"
                            required
                        />
                        </div>
                    </div>
                    <div className="w-full md:w-2/4lg:w-2/4">
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">
                            Processing Time
                            </span>
                        </label>
                        <input
                            defaultValue={oldCraft.processing_time}
                            name="processing_time"
                            type="text"
                            placeholder="Enter processing time"
                            className=" input input-bordered"
                            required
                        />
                        </div>
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">
                            Rating
                            </span>
                        </label>
                        <input
                            defaultValue={oldCraft.rating}
                            name="rating"
                            type="number"
                            step='any'
                            min='0'
                            max='9'
                            placeholder="Enter Rating"
                            className=" input input-bordered"
                            required
                        />
                        </div>
                        <div className="form-control py-2 font-raleway">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">
                            Description
                            </span>
                        </label>
                        <input
                            defaultValue={oldCraft.description}
                            name="description"
                            type="text"
                            placeholder="Enter craft description"
                            className=" input input-bordered"
                            required
                        />
                        </div>
                    </div>
                    </div>
                    <div className="form-control py-2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">
                                Customization
                            </span>
                        </label>
                        <div className="text-lg font-semibold flex justify-start items-center gap-3">
                            <input defaultChecked={oldCraft.customization === 'Yes'} type="radio" name="customization" id="" value='Yes' required/><span>Yes</span>
                            <input defaultChecked={oldCraft.customization === 'No'} type="radio" name="customization" id="" value='No' required/><span>No</span>
                        </div>
                    </div>
                    <div className="form-control py-2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">
                                Stock Status
                            </span>
                        </label>
                        <div className="text-lg font-semibold flex justify-start items-center gap-3">
                            <input defaultChecked={oldCraft.stockStatus === 'In stock'} type="radio" name="stockStatus" id="" value='In stock' required/><span>In Stock</span>
                            <input defaultChecked={oldCraft.stockStatus === 'Made to order'} type="radio" name="stockStatus" id="" value='Made to order' required/><span>Made To Order</span>
                        </div>
                    </div>
                    <div className="form-control py-2 font-raleway">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">
                        Photo
                        </span>
                    </label>
                    <input
                        defaultValue={oldCraft.photo}
                        name="photo"
                        type="url"
                        placeholder="Enter photo URL"
                        className=" input input-bordered"
                        required
                    />
                    </div>
                    <div>
                    <input
                        className=" flex items-center w-full btn btn-primary py-[9px]  text-white text-2xl font-normal "
                        type="submit"
                        value="Add Craft"
                    />
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateExistingCraft;