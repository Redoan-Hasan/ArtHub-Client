/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Art = ({art}) => {
    console.log(art);
    return (
        <div className="max-w-screen-xl mx-auto lg:h-[calc(100vh-300px)] xl:h-[calc(100vh-300px)] flex justify-center items-center  ">
            <section className="dark:bg-gray-100 dark:text-gray-800 ">
                <div className="container flex flex-col-reverse  mx-auto lg:flex-row-reverse">
                    <div className="flex flex-grow flex-col px-6 py-4 space-y-6 rounded-sm sm:p-8 lg:p-8 lg:w-1/2 xl:w-1/2 dark:bg-violet-600 dark:text-gray-50">
                        <div className="flex space-x-2 text-black sm:space-x-4">
                            <div className="space-y-2">
                            <h2 className="card-title text-2xl font-bold">{art.itemName}</h2>
                            <p className="text-xl font-semibold">Subcategory Name : {art.subcategory_name}</p>
                            <p className="text-lg font-semibold">Price : ${art.price}</p>
                            <p className="text-xl font-semibold">Processing Time : {art.processing_time}</p>
                            <p className="text-xl font-semibold">Rating : {art.rating}</p>
                            <p className="text-xl font-semibold">Interpretation : <span className="text-base">{art.description}</span></p>
                            <div className="text-right">
                                <Link to={`/viewDetails/${art._id}`} className="btn btn-primary">View Full Details</Link>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={art.itemPhoto} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Art;