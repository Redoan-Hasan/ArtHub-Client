/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from "react-router-dom";
// ..
AOS.init();
const SingleCraftCard = ({singleCraft}) => {
    // console.log(singleCraft);
    const {_id,itemName,itemPhoto,description}=singleCraft;
    return (
        <div>
            <div data-aos="fade-right" data-aos-duration="800" className="flex flex-col overflow-x-hidden h-[545px]  w-full border-2 border-primary p-1  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={itemPhoto} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div data-aos="fade-left" data-aos-duration = "500" className="flex flex-col flex-grow justify-between p-6 space-y-8">
                    <div  className="space-y-2 ">
                        <h2 className="text-3xl font-semibold tracking-wide">{itemName}</h2>
                        <p className="dark:text-gray-800">
                            {
                                description.length > 30 ?
                                description.slice(0,110).trimEnd()+'...':
                                description
                            }
                        </p>
                    </div>
                    <Link to={`/viewDetails/${_id}`}  type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCraftCard;