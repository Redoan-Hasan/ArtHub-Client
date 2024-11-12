import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
// import axios from "axios";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const handleAddCraft = (e) => {
    e.preventDefault();
    const itemName = e.target.itemName.value;
    const subcategory_name = e.target.subcategory_name.value;
    const price = e.target.price.value;
    const processing_time = e.target.processing_time.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;
    const itemPhoto = e.target.itemPhoto.value;
    const subcategoryPhoto = e.target.subcategory_photo.value;
    const email = user.email;
    const customization = e.target.customization.value;
    const stockStatus = e.target.stockStatus.value;
    const newCraft = {
      itemName,
      subcategory_name,
      price,
      processing_time,
      rating,
      description,
      itemPhoto,
      subcategoryPhoto,
      customization,
      stockStatus,
      email,
    };
    console.log(newCraft);


    // how to use axios instead of fetch 
    // axios.post('https://art-hub-server.vercel.app/crafts',newCraft)
    // .then((data.data) => {
    //   e.target.reset();
    //   console.log(data.data);
    //   if (data.data.insertedId) {
    //     Swal.fire("Successfully Added!");
    //   }
    // });

    fetch("https://art-hub-server.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Successfully Added!");
        }
      });
  };
  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-10 text-center lg:text-left">
        <Link to="/" className="btn btn-primary ml-2">
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
              <form onSubmit={handleAddCraft}>
                <div className="flex flex-col md:flex-row lg:flex-row gap-9">
                  <div className="w-full md:w-2/4lg:w-2/4">
                    <div className="form-control py-2 font-raleway">
                      <label className="label">
                        <span className="label-text text-lg font-semibold">
                          Item Name
                        </span>
                      </label>
                      <input
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
                        name="rating"
                        type="number"
                        step="any"
                        min="0"
                        max="9"
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
                    <input
                      type="radio"
                      name="customization"
                      id=""
                      value="Yes"
                      required
                    />
                    <span>Yes</span>
                    <input
                      type="radio"
                      name="customization"
                      id=""
                      value="No"
                      required
                    />
                    <span>No</span>
                  </div>
                </div>
                <div className="form-control py-2">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Stock Status
                    </span>
                  </label>
                  <div className="text-lg font-semibold flex justify-start items-center gap-3">
                    <input
                      type="radio"
                      name="stockStatus"
                      id=""
                      value="In stock"
                      required
                    />
                    <span>In Stock</span>
                    <input
                      type="radio"
                      name="stockStatus"
                      id=""
                      value="Made to order"
                      required
                    />
                    <span>Made To Order</span>
                  </div>
                </div>
                <div className="form-control py-2 font-raleway">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Item Photo
                    </span>
                  </label>
                  <input
                    name="itemPhoto"
                    type="url"
                    placeholder="Enter item photo URL"
                    className=" input input-bordered"
                    required
                  />
                </div>
                <div className="form-control py-2 font-raleway">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Subcategory Photo
                    </span>
                  </label>
                  <input
                    name="subcategory_photo"
                    type="url"
                    placeholder="Enter subcategory photo URL"
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

export default AddCraft;
