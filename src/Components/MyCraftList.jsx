import { Link, useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useState } from "react";
import Swal from "sweetalert2";

AOS.init();
const MyCraftList = () => {
    const myCrafts = useLoaderData();
    const [sortedCrafts,setSortedCrafts]=useState(myCrafts)
    // console.log(myCrafts);

    const handleYesSort = ()=>{
        const sortBasedOnYes = myCrafts.filter(sortedCraft => sortedCraft.customization === 'Yes')
        setSortedCrafts(sortBasedOnYes)
        console.log(sortBasedOnYes);
    }
    const handleNoSort = () =>{
        const sortBasedOnNo = myCrafts.filter(sortedCraft => sortedCraft.customization === 'No')
        setSortedCrafts(sortBasedOnNo)
        console.log(setSortedCrafts);
    }

    const handleDelete = (id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/updateExistingCraft/${id}`, {
                        method: "DELETE",
                    })
                    .then(res =>res.json())
                    .then(data =>{
                        console.log(data);
                        if(data.deletedCount){
                            setSortedCrafts(
                                sortedCrafts.filter(craft => craft._id !== id)
                            )
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                }
                
            });
    }
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="text-center py-3">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-primary btn-wide text-xl font-semibold m-1">Sort By Customization</div>
                <ul tabIndex={0} className=" dropdown-content flex flex-col gap-2 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={handleYesSort} className=" btn text-lg font-semibold block rounded-lg px-4 py-2 border border-primary text-primary">Yes</li>
                    <li onClick={handleNoSort} className="btn text-lg font-semibold block rounded-lg px-4 py-2 border border-primary text-primary">No</li>
                </ul>
</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 px-4 py-4">
                {
                    sortedCrafts.map(craft =>(
                        <div key={craft._id}>
                            <div data-aos="fade-right" data-aos-duration="800" className=" flex flex-col overflow-x-hidden h-[545px]  w-full border-2 border-primary p-1  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                                <img src={craft.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div data-aos="fade-left" data-aos-duration = "500" className="flex flex-col justify-between flex-grow p-6 space-y-8">
                                    <div  className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{craft.itemName}</h2>
                                        <p className="dark:text-gray-800">
                                            {
                                                craft.description.length > 30 ?
                                                craft.description.slice(0,110).trimEnd()+'...':
                                                craft.description
                                            }
                                        </p>
                                    </div>
                                    <div className="flex  justify-between items-center">
                                        <Link to={`/updateExistingCraft/${craft._id}`} className="btn btn-secondary">Update</Link>
                                        <button onClick={()=>handleDelete(craft._id)} className="btn btn-error">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyCraftList;